document.addEventListener('DOMContentLoaded', function() {
    // State variables
    let currentQuestion = 0;
    let userAnswers = new Array(urduMCQs.length).fill(null);
    let isSubmitted = false;
    let isUrduMode = false;
    let currentTopic = "all";
    let topicCompleted = false;
    
    // Define topics from syllabus - ALWAYS IN ENGLISH
    const topics = [
        { id: "all", name: "All Topics", icon: "fas fa-globe" },
        { id: "prose", name: "Prose Section", icon: "fas fa-book-open" },
        { id: "ghazal", name: "Ghazal Poems", icon: "fas fa-music" },
        { id: "nazm", name: "Poems (Nazm)", icon: "fas fa-pen-alt" },
        { id: "rubai", name: "Rubaiyat", icon: "fas fa-quote-right" },
        { id: "grammar", name: "Grammar", icon: "fas fa-language" },
        { id: "writing", name: "Writing Skills", icon: "fas fa-edit" }
    ];
    
    // Questions by topic
    const questionsByTopic = {
        "prose": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        "ghazal": [13, 14, 15, 16, 17, 18, 19, 20],
        "nazm": [21, 22, 23, 24, 25, 26],
        "rubai": [27, 28, 29, 30],
        "grammar": [31, 32, 33, 34, 35, 36],
        "writing": [37, 38, 39, 40]
    };
    
    // Topic completion status
    let topicCompletionStatus = {
        "prose": false,
        "ghazal": false,
        "nazm": false,
        "rubai": false,
        "grammar": false,
        "writing": false,
        "all": false
    };
    
    // DOM Elements
    const mcqContainer = document.getElementById('mcqContainer');
    const submitBtn = document.getElementById('submitBtn');
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressPercent = document.getElementById('progressPercent');
    const questionsModal = document.getElementById('questionsModal');
    const resultsModal = document.getElementById('resultsModal');
    const questionsGrid = document.getElementById('questionsGrid');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const reviewBtn = document.getElementById('reviewBtn');
    const restartBtn = document.getElementById('restartBtn');
    const finalScore = document.getElementById('finalScore');
    const finalCorrect = document.getElementById('finalCorrect');
    const finalWrong = document.getElementById('finalWrong');
    const finalSkipped = document.getElementById('finalSkipped');
    const resultTitle = document.getElementById('resultTitle');
    const mobileNav = document.getElementById('mobileNav');
    
    // Get current filtered questions based on topic
    function getFilteredQuestions() {
        if (currentTopic === "all" || !questionsByTopic[currentTopic]) {
            return urduMCQs;
        }
        
        const questionIds = questionsByTopic[currentTopic];
        return urduMCQs.filter(q => questionIds.includes(q.id));
    }
    
    // Check if current topic is completed
    function checkTopicCompletion() {
        const filteredQuestions = getFilteredQuestions();
        
        // Check if all questions in current topic are answered
        const allAnswered = filteredQuestions.every(q => 
            userAnswers[q.id - 1] !== null
        );
        
        topicCompleted = allAnswered;
        
        // Update topic completion status
        if (currentTopic !== "all") {
            topicCompletionStatus[currentTopic] = allAnswered;
        }
        
        // Check if all topics are completed
        const allTopicsCompleted = Object.keys(questionsByTopic).every(topic => 
            topicCompletionStatus[topic]
        );
        
        topicCompletionStatus["all"] = allTopicsCompleted;
        
        return { topicCompleted, allTopicsCompleted };
    }
    
    // Show completion message
    function showCompletionMessage() {
        const { topicCompleted, allTopicsCompleted } = checkTopicCompletion();
        
        if (allTopicsCompleted && currentTopic === "all") {
            return `
                <div class="completion-message all-completed">
                    <i class="fas fa-trophy"></i>
                    <h3>🎉 Congratulations! 🎉</h3>
                    <p>You have completed ALL MCQs from ALL topics!</p>
                    <p class="sub-message">Great job! You're ready for the exam.</p>
                    <button id="viewResultsBtn" class="completion-btn">
                        <i class="fas fa-chart-bar"></i> View Results
                    </button>
                </div>
            `;
        } else if (topicCompleted && currentTopic !== "all") {
            const currentTopicObj = topics.find(t => t.id === currentTopic);
            return `
                <div class="completion-message topic-completed">
                    <i class="fas fa-check-circle"></i>
                    <h3>✅ Topic Completed!</h3>
                    <p>You have completed all MCQs in <strong>${currentTopicObj.name}</strong></p>
                    <p class="sub-message">Great work! Try another topic or submit to see results.</p>
                    <div class="completion-actions">
                        <button id="tryAnotherBtn" class="completion-btn secondary">
                            <i class="fas fa-random"></i> Try Another Topic
                        </button>
                        <button id="submitTopicBtn" class="completion-btn">
                            <i class="fas fa-paper-plane"></i> Submit & See Results
                        </button>
                    </div>
                </div>
            `;
        }
        
        return '';
    }
    
    // Initialize the app
    function init() {
        createTopicNavigation();
        createQuestionsGrid();
        loadQuestion(currentQuestion);
        updateProgress();
        updateNavigation();
        setupEventListeners();
    }
    
    // Create topic navigation - ALWAYS IN ENGLISH
    function createTopicNavigation() {
        // Create the navigation structure
        mobileNav.innerHTML = `
            <div class="nav-buttons">
                <button id="prevBtn" class="nav-btn">
                    <i class="fas fa-arrow-left"></i> Previous
                </button>
                <div class="nav-center">
                    <button id="jumpBtn" class="jump-btn">
                        <i class="fas fa-list-ol"></i>
                    </button>
                </div>
                <button id="nextBtn" class="nav-btn">
                    Next <i class="fas fa-arrow-right"></i>
                </button>
            </div>
            <div class="topics-row" id="topicsRow"></div>
        `;
        
        // Add topic chips - ALWAYS IN ENGLISH
        const topicsRow = document.getElementById('topicsRow');
        topics.forEach(topic => {
            const topicBtn = document.createElement('button');
            topicBtn.className = `topic-chip ${topic.id === 'all' ? 'active' : ''}`;
            
            // Add completion badge if topic is completed
            const completionBadge = topicCompletionStatus[topic.id] ? 
                '<span class="completion-badge"><i class="fas fa-check"></i></span>' : '';
            
            topicBtn.innerHTML = `
                <i class="${topic.icon}"></i> ${topic.name}
                ${completionBadge}
            `;
            topicBtn.dataset.topic = topic.id;
            
            topicBtn.addEventListener('click', () => {
                // Update active topic
                document.querySelectorAll('.topic-chip').forEach(btn => {
                    btn.classList.remove('active');
                });
                topicBtn.classList.add('active');
                
                // Change topic
                currentTopic = topic.id;
                currentQuestion = 0;
                topicCompleted = false;
                createQuestionsGrid();
                loadQuestion(currentQuestion);
                updateProgress();
                updateNavigation();
            });
            
            topicsRow.appendChild(topicBtn);
        });
    }
    
    // Update topic completion badges
    function updateTopicBadges() {
        document.querySelectorAll('.topic-chip').forEach(btn => {
            const topicId = btn.dataset.topic;
            const badge = btn.querySelector('.completion-badge');
            
            if (topicCompletionStatus[topicId] && !badge) {
                // Add badge if completed
                const badgeSpan = document.createElement('span');
                badgeSpan.className = 'completion-badge';
                badgeSpan.innerHTML = '<i class="fas fa-check"></i>';
                btn.appendChild(badgeSpan);
            } else if (!topicCompletionStatus[topicId] && badge) {
                // Remove badge if not completed
                badge.remove();
            }
        });
    }
    
    // Create questions grid for modal
    function createQuestionsGrid() {
        questionsGrid.innerHTML = '';
        const filteredQuestions = getFilteredQuestions();
        
        filteredQuestions.forEach((question, index) => {
            const questionItem = document.createElement('div');
            questionItem.className = 'question-item';
            questionItem.textContent = index + 1;
            questionItem.dataset.index = index;
            
            // Add completion indicator
            if (userAnswers[question.id - 1] !== null) {
                questionItem.classList.add('answered');
            }
            
            questionItem.addEventListener('click', () => {
                currentQuestion = index;
                loadQuestion(currentQuestion);
                updateProgress();
                updateNavigation();
                questionsModal.classList.remove('active');
            });
            
            questionsGrid.appendChild(questionItem);
        });
        updateQuestionsGrid();
    }
    
    // Update questions grid appearance
    function updateQuestionsGrid() {
        const questionItems = document.querySelectorAll('.question-item');
        const filteredQuestions = getFilteredQuestions();
        
        questionItems.forEach((item, index) => {
            item.classList.remove('answered', 'current', 'correct', 'incorrect');
            
            if (index === currentQuestion) {
                item.classList.add('current');
            }
            
            const question = filteredQuestions[index];
            if (userAnswers[question.id - 1] !== null) {
                item.classList.add('answered');
                
                if (isSubmitted) {
                    if (userAnswers[question.id - 1] === question.correctAnswer) {
                        item.classList.add('correct');
                    } else {
                        item.classList.add('incorrect');
                    }
                }
            }
        });
    }
    
    // Load question
    function loadQuestion(index) {
        const filteredQuestions = getFilteredQuestions();
        
        // Check if we should show completion message
        const completionMessage = showCompletionMessage();
        if (completionMessage && topicCompleted) {
            mcqContainer.innerHTML = completionMessage;
            
            // Add event listeners to completion buttons
            setTimeout(() => {
                setupCompletionButtonListeners();
            }, 100);
            return;
        }
        
        if (filteredQuestions.length === 0) {
            mcqContainer.innerHTML = '<div class="no-questions">No questions in this category</div>';
            return;
        }
        
        const question = filteredQuestions[index];
        const urduContent = isUrduMode ? getUrduContent(question.id) : null;
        
        let optionsHTML = '';
        question.options.forEach((option, optionIndex) => {
            const isSelected = userAnswers[question.id - 1] === optionIndex;
            const isCorrect = isSubmitted && optionIndex === question.correctAnswer;
            const isIncorrect = isSubmitted && isSelected && optionIndex !== question.correctAnswer;
            
            let optionClass = 'option';
            if (isSelected) optionClass += ' selected';
            if (isCorrect && isSubmitted) optionClass += ' correct';
            if (isIncorrect && isSubmitted) optionClass += ' incorrect';
            
            const optionLabel = String.fromCharCode(65 + optionIndex);
            const optionText = urduContent ? urduContent.options[optionIndex] : option;
            
            optionsHTML += `
                <div class="${optionClass}" data-option="${optionIndex}">
                    <div class="option-label">${optionLabel}</div>
                    <div class="option-text">
                        <div class="${isUrduMode ? 'urdu-text' : 'english-text'}">${optionText}</div>
                    </div>
                </div>
            `;
        });
        
        const questionText = urduContent ? urduContent.question : question.question;
        
        // Keep category in English even in Urdu mode
        const categoryDisplay = isUrduMode ? 
            getEnglishCategoryName(question.category) : 
            question.category;
        
        const questionHTML = `
            <div class="question-header">
                <div class="question-number">${index + 1}</div>
                <div class="question-category">${categoryDisplay}</div>
                ${topicCompleted ? '<div class="topic-progress">Topic Complete!</div>' : ''}
            </div>
            <div class="question-text">
                <div class="${isUrduMode ? 'urdu-text' : 'english-text'}">${questionText}</div>
            </div>
            <div class="options-container">
                ${optionsHTML}
            </div>
            ${isSubmitted ? `
                <div class="explanation">
                    <h3><i class="fas fa-lightbulb"></i> ${isUrduMode ? 'وضاحت' : 'Explanation'}</h3>
                    <p class="${isUrduMode ? 'urdu-text' : 'english-text'}">
                        ${urduContent ? urduContent.explanation : question.explanation}
                    </p>
                </div>
            ` : ''}
        `;
        
        mcqContainer.innerHTML = questionHTML;
        
        // Add event listeners to options if not submitted
        if (!isSubmitted) {
            document.querySelectorAll('.option').forEach(option => {
                option.addEventListener('click', function() {
                    const selectedOption = parseInt(this.dataset.option);
                    selectOption(index, selectedOption);
                });
            });
        }
        
        updateQuestionsGrid();
    }
    
    // Setup completion button listeners
    function setupCompletionButtonListeners() {
        // View Results button (for all topics completed)
        const viewResultsBtn = document.getElementById('viewResultsBtn');
        if (viewResultsBtn) {
            viewResultsBtn.addEventListener('click', () => {
                showResults();
            });
        }
        
        // Try Another Topic button
        const tryAnotherBtn = document.getElementById('tryAnotherBtn');
        if (tryAnotherBtn) {
            tryAnotherBtn.addEventListener('click', () => {
                // Switch to "All Topics" or next incomplete topic
                const incompleteTopics = Object.keys(questionsByTopic).filter(
                    topic => !topicCompletionStatus[topic]
                );
                
                if (incompleteTopics.length > 0) {
                    // Switch to first incomplete topic
                    currentTopic = incompleteTopics[0];
                    currentQuestion = 0;
                    
                    // Update active topic button
                    document.querySelectorAll('.topic-chip').forEach(btn => {
                        btn.classList.remove('active');
                        if (btn.dataset.topic === currentTopic) {
                            btn.classList.add('active');
                        }
                    });
                    
                    createQuestionsGrid();
                    loadQuestion(currentQuestion);
                    updateProgress();
                    updateNavigation();
                } else {
                    // All topics completed, show all topics
                    currentTopic = "all";
                    currentQuestion = 0;
                    
                    // Update active topic button
                    document.querySelectorAll('.topic-chip').forEach(btn => {
                        btn.classList.remove('active');
                        if (btn.dataset.topic === "all") {
                            btn.classList.add('active');
                        }
                    });
                    
                    createQuestionsGrid();
                    loadQuestion(currentQuestion);
                    updateProgress();
                    updateNavigation();
                }
            });
        }
        
        // Submit Topic button
        const submitTopicBtn = document.getElementById('submitTopicBtn');
        if (submitTopicBtn) {
            submitTopicBtn.addEventListener('click', () => {
                showResults();
            });
        }
    }
    
    // Convert Urdu categories to English for display
    function getEnglishCategoryName(urduCategory) {
        const categoryMap = {
            "حصّہ نثر - نیا قانون": "Prose - New Law",
            "حصّہ نثر - سر سید کا بچپن": "Prose - Sir Syed's Childhood",
            "حصّہ نثر - آزمایش": "Prose - Experiment",
            "حصّہ نثر - عورتوں کے حقوق": "Prose - Women's Rights",
            "حصّہ نثر - مخلوط زبان": "Prose - Mixed Language",
            "حصّہ نثر - ماحول بچائیے": "Prose - Save Environment",
            "نظم (غزل) - لائی حیات آئے": "Ghazal - Laai Hayat Aaye",
            "نظم (غزل) - ڈھونڈو گے اگر ملکوں ملکوں": "Ghazal - Dhoondo Ge Agar Mulkon",
            "نظم (غزل) - دُنیا میری بلا جانے": "Ghazal - Duniya Meri Bala Jaane",
            "نظم (غزل) - ادب نے دل کے تقاضے": "Ghazal - Adab Ne Dil Ke Taqaze",
            "نظم (نظم) - جلوہء دربارِ دہلی": "Poem - Jalwa-e-Darbar-e-Dehli",
            "نظم (نظم) - حقیقت حسن": "Poem - Haqeeqat-e-Husn",
            "نظم (نظم) - او دیس سے آنے والے": "Poem - O Des Se Aane Wale",
            "رباعی - میر ببر علی انیس": "Rubai - Mir Babar Ali Anis",
            "رباعی - تیلوک چند محروم": "Rubai - Tilok Chand Mahroom",
            "قواعد - اسم": "Grammar - Noun",
            "قواعد - فعل": "Grammar - Verb",
            "قواعد - حرف": "Grammar - Particle",
            "تحریری کام - درخواست": "Writing - Application",
            "تحریری کام - خط": "Writing - Letter",
            "تحریری کام - مضمون": "Writing - Essay",
            "تحریری کام - غیر درسی اقتباس": "Writing - Non-textual Extract"
        };
        
        return categoryMap[urduCategory] || urduCategory;
    }
    
    // Select option
    function selectOption(index, optionIndex) {
        const filteredQuestions = getFilteredQuestions();
        const question = filteredQuestions[index];
        userAnswers[question.id - 1] = optionIndex;
        
        // Update UI
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        event.target.closest('.option').classList.add('selected');
        
        updateProgress();
        updateQuestionsGrid();
        
        // Check if topic is completed after this answer
        checkTopicCompletion();
        updateTopicBadges();
    }
    
    // Update progress
 function updateProgress() {
        const filteredQuestions = getFilteredQuestions();
        const answeredInTopic = filteredQuestions.filter(q => 
            userAnswers[q.id - 1] !== null
        ).length;
        const totalInTopic = filteredQuestions.length;
        const percent = totalInTopic > 0 ? Math.round((answeredInTopic / totalInTopic) * 100) : 0;
        
        // Update progress bar
        progressBar.style.width = `${percent}%`;
        progressText.textContent = `Q ${currentQuestion + 1}/${totalInTopic}`;
        progressPercent.textContent = `${percent}%`;
        
        // Check completion status
        checkTopicCompletion();
        updateTopicBadges();
    }
    
    // Calculate score for current topic
    function calculateTopicScore() {
        if (currentTopic === "all") {
            return calculateTotalScore();
        }
        
        const filteredQuestions = getFilteredQuestions();
        let correct = 0;
        let total = filteredQuestions.length;
        
        filteredQuestions.forEach(question => {
            if (userAnswers[question.id - 1] === question.correctAnswer) {
                correct++;
            }
        });
        
        return { correct, total };
    }
    
    // Calculate total score (all questions)
    function calculateTotalScore() {
        let correct = 0;
        urduMCQs.forEach(question => {
            if (userAnswers[question.id - 1] === question.correctAnswer) {
                correct++;
            }
        });
        
        return { correct, total: urduMCQs.length };
    }
    
    // Update navigation buttons
    function updateNavigation() {
        const filteredQuestions = getFilteredQuestions();
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn && nextBtn) {
            prevBtn.disabled = currentQuestion === 0;
            nextBtn.disabled = currentQuestion === filteredQuestions.length - 1;
        }
        
        // Change submit button text if submitted
        if (isSubmitted) {
            submitBtn.innerHTML = '<i class="fas fa-redo"></i> Restart Test';
        } else {
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Test';
        }
    }
    
    // Show results - SHOWS TOPIC SPECIFIC RESULTS
    function showResults() {
        let scoreInfo, total, correct, wrong, skipped;
        
        if (currentTopic === "all") {
            scoreInfo = calculateTotalScore();
            total = scoreInfo.total;
            correct = scoreInfo.correct;
            wrong = urduMCQs.filter(q => 
                userAnswers[q.id - 1] !== null && 
                userAnswers[q.id - 1] !== q.correctAnswer
            ).length;
            skipped = userAnswers.filter(answer => answer === null).length;
        } else {
            scoreInfo = calculateTopicScore();
            total = scoreInfo.total;
            correct = scoreInfo.correct;
            
            const filteredQuestions = getFilteredQuestions();
            wrong = filteredQuestions.filter(q => 
                userAnswers[q.id - 1] !== null && 
                userAnswers[q.id - 1] !== q.correctAnswer
            ).length;
            
            const answeredInTopic = filteredQuestions.filter(q => 
                userAnswers[q.id - 1] !== null
            ).length;
            skipped = total - answeredInTopic;
        }
        
        const percent = Math.round((correct / total) * 100);
        
        // Update modal with topic-specific info
        finalScore.textContent = `${percent}%`;
        finalCorrect.textContent = correct;
        finalWrong.textContent = wrong;
        finalSkipped.textContent = skipped;
        
        // Set result title based on topic
        const currentTopicObj = topics.find(t => t.id === currentTopic);
        const topicName = currentTopic === "all" ? "All Topics" : currentTopicObj.name;
        
        if (percent >= 90) {
            resultTitle.textContent = `Excellent in ${topicName}!`;
        } else if (percent >= 70) {
            resultTitle.textContent = `Very Good in ${topicName}!`;
        } else if (percent >= 50) {
            resultTitle.textContent = `Good Job in ${topicName}!`;
        } else {
            resultTitle.textContent = `Needs Practice in ${topicName}`;
        }
        
        resultsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        isSubmitted = true;
    }
    
    // Restart test
    function restartTest() {
        currentQuestion = 0;
        userAnswers = new Array(urduMCQs.length).fill(null);
        isSubmitted = false;
        currentTopic = "all";
        topicCompleted = false;
        
        // Reset all completion status
        Object.keys(topicCompletionStatus).forEach(key => {
            topicCompletionStatus[key] = false;
        });
        
        // Reset topic buttons
        document.querySelectorAll('.topic-chip').forEach(btn => {
            btn.classList.remove('active');
        });
        const allTopicBtn = document.querySelector('[data-topic="all"]');
        if (allTopicBtn) allTopicBtn.classList.add('active');
        
        createTopicNavigation();
        createQuestionsGrid();
        loadQuestion(currentQuestion);
        updateProgress();
        updateNavigation();
        resultsModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Previous button
        document.addEventListener('click', function(e) {
            if (e.target.closest('#prevBtn')) {
                if (currentQuestion > 0) {
                    currentQuestion--;
                    loadQuestion(currentQuestion);
                    updateProgress();
                }
            }
        });
        
        // Next button
        document.addEventListener('click', function(e) {
            if (e.target.closest('#nextBtn')) {
                const filteredQuestions = getFilteredQuestions();
                if (currentQuestion < filteredQuestions.length - 1) {
                    currentQuestion++;
                    loadQuestion(currentQuestion);
                    updateProgress();
                }
            }
        });
        
        // Jump button
        document.addEventListener('click', function(e) {
            if (e.target.closest('#jumpBtn')) {
                questionsModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
        
        // Submit button
        submitBtn.addEventListener('click', () => {
            if (!isSubmitted) {
                const filteredQuestions = getFilteredQuestions();
                const unansweredInTopic = filteredQuestions.filter(q => 
                    userAnswers[q.id - 1] === null
                ).length;
                
                if (unansweredInTopic > 0) {
                    if (confirm(`${unansweredInTopic} questions unanswered in this topic. Submit anyway?`)) {
                        showResults();
                    }
                } else {
                    showResults();
                }
            } else {
                restartTest();
            }
        });
        
        // Language toggle
        langToggle.addEventListener('click', () => {
            isUrduMode = !isUrduMode;
            langText.textContent = isUrduMode ? 'English Mode' : 'Urdu Mode';
            loadQuestion(currentQuestion);
        });
        
        // Close modals
        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                questionsModal.classList.remove('active');
                resultsModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Close modal on outside click
        window.addEventListener('click', (e) => {
            if (e.target === questionsModal) {
                questionsModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            if (e.target === resultsModal) {
                resultsModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Review button
        reviewBtn.addEventListener('click', () => {
            resultsModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            currentQuestion = 0;
            loadQuestion(currentQuestion);
            updateProgress();
        });
        
        // Restart button
        restartBtn.addEventListener('click', () => {
            restartTest();
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                document.getElementById('prevBtn')?.click();
            } else if (e.key === 'ArrowRight') {
                document.getElementById('nextBtn')?.click();
            } else if (e.key >= '1' && e.key <= '4' && !isSubmitted) {
                const optionIndex = parseInt(e.key) - 1;
                selectOption(currentQuestion, optionIndex);
            } else if (e.key === 'Enter') {
                const filteredQuestions = getFilteredQuestions();
                if (currentQuestion === filteredQuestions.length - 1) {
                    submitBtn.click();
                } else {
                    document.getElementById('nextBtn')?.click();
                }
            } else if (e.key === 'Escape') {
                questionsModal.classList.remove('active');
                resultsModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Swipe gestures for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        mcqContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        mcqContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const difference = touchStartX - touchEndX;
            
            if (Math.abs(difference) > swipeThreshold) {
                if (difference > 0) {
                    // Swipe left - next question
                    document.getElementById('nextBtn')?.click();
                } else {
                    // Swipe right - previous question
                    document.getElementById('prevBtn')?.click();
                }
            }
        }
    }
    
    // Start the app
    init();
});