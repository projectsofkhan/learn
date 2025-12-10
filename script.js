// Professional Sound System - Using Web Audio API
class SoundSystem {
    constructor() {
        this.audioContext = null;
        this.soundEnabled = true;
        this.loadSoundSettings();
        this.initAudioContext();
    }

    initAudioContext() {
        // Initialize audio context on first user interaction
        const initAudio = () => {
            if (!this.audioContext) {
                try {
                    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    console.log("🎵 Audio system ready!");
                } catch (e) {
                    console.log("Audio context creation failed:", e);
                    this.soundEnabled = false;
                }
            }
        };

        // Listen for any user interaction
        document.addEventListener('click', initAudio, { once: true });
        document.addEventListener('touchstart', initAudio, { once: true });
        document.addEventListener('keydown', initAudio, { once: true });
    }

    loadSoundSettings() {
        // Load sound preference from localStorage
        const saved = localStorage.getItem('soundEnabled');
        if (saved !== null) {
            this.soundEnabled = saved === 'true';
        }
        // Update UI if toggle button exists
        this.updateToggleUI();
    }

    saveSoundSettings() {
        localStorage.setItem('soundEnabled', this.soundEnabled);
        this.updateToggleUI();
    }

    updateToggleUI() {
        const toggleBtn = document.getElementById('soundToggle');
        if (toggleBtn) {
            toggleBtn.innerHTML = this.soundEnabled ? 
                '<i class="fas fa-volume-up"></i> Sound ON' : 
                '<i class="fas fa-volume-mute"></i> Sound OFF';
            toggleBtn.classList.toggle('active', this.soundEnabled);
        }
    }

    // Safe play method
    async playSound(type) {
        if (!this.soundEnabled) return;

        // If audio context isn't ready, try to initialize it
        if (!this.audioContext) {
            try {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) {
                console.log("Audio context creation failed:", e);
                return;
            }
        }

        // Resume audio context if suspended
        if (this.audioContext.state === 'suspended') {
            try {
                await this.audioContext.resume();
            } catch (e) {
                console.log("Audio resume failed:", e);
                return;
            }
        }

        try {
            switch(type) {
                case 'click':
                    this.playTone(800, 0.1, 'sine');
                    break;
                case 'correct':
                    this.playTone(1200, 0.2, 'sine');
                    setTimeout(() => this.playTone(1500, 0.15, 'sine'), 100);
                    break;
                case 'wrong':
                    this.playTone(400, 0.3, 'square');
                    setTimeout(() => this.playTone(300, 0.2, 'square'), 150);
                    break;
                case 'success':
                    this.playTone(523.25, 0.15, 'sine'); // C5
                    setTimeout(() => this.playTone(659.25, 0.15, 'sine'), 150); // E5
                    setTimeout(() => this.playTone(783.99, 0.15, 'sine'), 300); // G5
                    break;
                case 'page':
                    this.playTone(600, 0.15, 'sine');
                    break;
            }
        } catch (e) {
            console.log("Sound error:", e);
        }
    }

    playTone(freq, duration, waveType) {
        if (!this.audioContext) return;

        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.frequency.value = freq;
            oscillator.type = waveType;

            // Smooth volume envelope
            const now = this.audioContext.currentTime;
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

            oscillator.start(now);
            oscillator.stop(now + duration);

            // Clean up
            oscillator.onended = () => {
                oscillator.disconnect();
                gainNode.disconnect();
            };
        } catch (e) {
            console.log("Tone error:", e);
        }
    }

    toggle() {
        this.soundEnabled = !this.soundEnabled;
        this.saveSoundSettings();
        
        if (this.soundEnabled) {
            this.playSound('click');
        }
        return this.soundEnabled;
    }
}

// Initialize global sound system
const soundSystem = new SoundSystem();

// Helper functions to maintain compatibility
function playSound(soundName) {
    soundSystem.playSound(soundName);
}

function toggleSound() {
    soundSystem.toggle();
}

// Chapters information
const chapters = [
    { id: "ch1", name: "Chemical Reactions", icon: "fa-flask", color: "#FF6B6B", subtitle: "Chapter 1" },
    { id: "ch2", name: "Acids, Bases & Salts", icon: "fa-vial", color: "#4ECDC4", subtitle: "Chapter 2" },
    { id: "ch3", name: "Metals & Non-metals", icon: "fa-gem", color: "#45B7D1", subtitle: "Chapter 3" },
    { id: "ch4", name: "Carbon & Compounds", icon: "fa-atom", color: "#FFEAA7", subtitle: "Chapter 4" },
    { id: "ch5", name: "Life Processes", icon: "fa-heartbeat", color: "#A29BFE", subtitle: "Chapter 5" },
    { id: "ch6", name: "Control & Coordination", icon: "fa-brain", color: "#FD79A8", subtitle: "Chapter 6" },
    { id: "ch7", name: "How Organisms Reproduce", icon: "fa-seedling", color: "#00CEC9", subtitle: "Chapter 7" },
    { id: "ch8", name: "Light", icon: "fa-lightbulb", color: "#FDCB6E", subtitle: "Chapter 8" },
    { id: "ch9", name: "Human Eye", icon: "fa-eye", color: "#74B9FF", subtitle: "Chapter 9" },
    { id: "ch10", name: "Electricity", icon: "fa-bolt", color: "#FF7675", subtitle: "Chapter 10" }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeChaptersGrid();
    createMCQPages();
    addSoundToggle();
    loadAllProgress();
});

// Create sound toggle button - FIXED: Changed selector to correct header
function addSoundToggle() {
    const header = document.querySelector('.header');
    if (header) {
        const soundToggle = document.createElement('button');
        soundToggle.id = 'soundToggle';
        soundToggle.className = 'sound-toggle';
        soundToggle.setAttribute('aria-label', 'Toggle sound effects');
        soundToggle.innerHTML = '<i class="fas fa-volume-up"></i> Sound ON';
        soundToggle.addEventListener('click', toggleSound);

        // Add to header controls div
        let controlsDiv = header.querySelector('.header-controls');
        if (!controlsDiv) {
            controlsDiv = document.createElement('div');
            controlsDiv.className = 'header-controls';
            header.appendChild(controlsDiv);
        }
        controlsDiv.appendChild(soundToggle);
        
        // Update UI with saved state
        soundSystem.updateToggleUI();
    }
}

// Create chapters grid
function initializeChaptersGrid() {
    const chaptersGrid = document.getElementById('chaptersGrid');

    chapters.forEach(chapter => {
        const chapterBtn = document.createElement('button');
        chapterBtn.className = 'chapter-btn';
        chapterBtn.setAttribute('data-chapter', chapter.id);
        chapterBtn.setAttribute('aria-label', `Open ${chapter.name}`);
        chapterBtn.innerHTML = `
            <i class="fas ${chapter.icon}"></i>
            <span>${chapter.name}</span>
            <small>${chapter.subtitle} • 10 MCQs</small>
        `;

        chapterBtn.style.background = `linear-gradient(135deg, ${chapter.color}, ${darkenColor(chapter.color, 20)})`;

        // Remove blue highlight on click
        chapterBtn.addEventListener('mousedown', function(e) {
            e.preventDefault();
        });

        chapterBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
        });

        chapterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            playSound('click');
            this.classList.add('clicked');
            setTimeout(() => this.classList.remove('clicked'), 300);
            openChapter(chapter.id);
        });

        chaptersGrid.appendChild(chapterBtn);
    });
}

// Utility function to darken color
function darkenColor(color, percent) {
    let num = parseInt(color.replace("#", ""), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) - amt,
        G = (num >> 8 & 0x00FF) - amt,
        B = (num & 0x0000FF) - amt;

    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// Open a specific chapter
function openChapter(chapterId) {
    playSound('page');

    // Hide all mcq pages first
    document.querySelectorAll('.mcq-page').forEach(page => {
        page.classList.remove('active');
    });

    // Hide chapters grid
    document.getElementById('chaptersGrid').style.display = 'none';

    // Show the selected chapter page
    const chapterPage = document.getElementById(`page-${chapterId}`);
    if (chapterPage) {
        chapterPage.classList.add('active');
    }

    // Scroll to top
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}

// Go back to main menu
function goBackToMenu() {
    playSound('click');

    // Hide all mcq pages
    document.querySelectorAll('.mcq-page').forEach(page => {
        page.classList.remove('active');
    });

    // Show chapters grid
    document.getElementById('chaptersGrid').style.display = 'grid';

    // Scroll to top
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}