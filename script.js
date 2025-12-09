// Sound effects
const sounds = {
    click: new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ'),
    correct: new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ'),
    wrong: new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ'),
    success: new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ'),
    page: new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ')
};

// Initialize sound URLs (using base64 encoded beep sounds)
function initSounds() {
    // Simple beep sounds
    const beep1 = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ' + btoa(String.fromCharCode(...new Array(1000).fill(0)));
    const beep2 = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ' + btoa(String.fromCharCode(...new Array(1500).fill(0)));
    const beep3 = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ' + btoa(String.fromCharCode(...new Array(2000).fill(0)));
    
    sounds.click.src = beep1;
    sounds.correct.src = beep2;
    sounds.wrong.src = beep3;
    sounds.success.src = beep2;
    sounds.page.src = beep1;
}

// Sound control
let soundEnabled = true;

function playSound(soundName) {
    if (!soundEnabled) return;
    
    try {
        sounds[soundName].currentTime = 0;
        sounds[soundName].play().catch(e => console.log("Sound play failed:", e));
    } catch (e) {
        console.log("Sound error:", e);
    }
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    const toggleBtn = document.getElementById('soundToggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = soundEnabled ? 
            '<i class="fas fa-volume-up"></i> Sound ON' : 
            '<i class="fas fa-volume-mute"></i> Sound OFF';
        toggleBtn.classList.toggle('active', soundEnabled);
        
        // Play toggle sound if turning on
        if (soundEnabled) playSound('click');
    }
}

// MCQ Data for all chapters (updated with all 10 chapters)
const mcqData = {
    "ch1": {
        title: "Chapter 1: Chemical Reactions and Equations",
        questions: [
            {
                question: "Which of the following is a combination reaction?",
                options: [
                    "2H₂O → 2H₂ + O₂",
                    "CaO + H₂O → Ca(OH)₂",
                    "2FeSO₄ → Fe₂O₃ + SO₂ + SO₃",
                    "2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂"
                ],
                correctAnswer: 1
            },
            {
                question: "The process of coating iron with zinc to prevent rusting is called:",
                options: ["Galvanization", "Annealing", "Smelting", "Corrosion"],
                correctAnswer: 0
            },
            {
                question: "What type of reaction is represented by: 2Mg + O₂ → 2MgO?",
                options: ["Decomposition", "Double Displacement", "Combination", "Displacement"],
                correctAnswer: 2
            },
            {
                question: "In the reaction Pb(s) + CuCl₂(aq) → PbCl₂(aq) + Cu(s):",
                options: [
                    "Copper is oxidised",
                    "Lead is reduced",
                    "Lead is oxidised",
                    "No redox occurs"
                ],
                correctAnswer: 2
            },
            {
                question: "A substance 'X' is used in whitewashing. It reacts with water to form 'Y'. 'X' and 'Y' are:",
                options: [
                    "X = CaO, Y = CaCO₃",
                    "X = Ca(OH)₂, Y = CaO",
                    "X = CaO, Y = Ca(OH)₂",
                    "X = CaCO₃, Y = CaO"
                ],
                correctAnswer: 2
            },
            {
                question: "Which gas is evolved when dilute hydrochloric acid reacts with sodium carbonate?",
                options: ["Chlorine", "Hydrogen", "Carbon dioxide", "Oxygen"],
                correctAnswer: 2
            },
            {
                question: "Rancidity in food is prevented by adding:",
                options: ["Oxidizing agents", "Reducing agents", "Antacids", "Catalysts"],
                correctAnswer: 1
            },
            {
                question: "The balanced equation for the reaction of barium chloride with sodium sulphate is:",
                options: [
                    "BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl",
                    "BaCl + NaSO₄ → BaSO₄ + NaCl",
                    "BaCl₂ + Na₂SO₄ → Ba₂SO₄ + NaCl",
                    "2BaCl + Na₂SO₄ → Ba₂SO₄ + 2NaCl"
                ],
                correctAnswer: 0
            },
            {
                question: "Which of the following is an endothermic reaction?",
                options: [
                    "Burning of natural gas",
                    "Respiration",
                    "Decomposition of vegetable matter",
                    "Decomposition of calcium carbonate to quick lime"
                ],
                correctAnswer: 3
            },
            {
                question: "In the electrolysis of water, the ratio of hydrogen to oxygen gas volume is:",
                options: ["1:2", "2:1", "1:1", "8:1"],
                correctAnswer: 1
            }
        ]
    },
    "ch2": {
        title: "Chapter 2: Acids, Bases and Salts",
        questions: [
            {
                question: "A solution turns red litmus blue. Its pH is likely to be:",
                options: ["1", "4", "5", "10"],
                correctAnswer: 3
            },
            {
                question: "Which one of the following is not a strong acid?",
                options: [
                    "Hydrochloric acid (HCl)",
                    "Acetic acid (CH₃COOH)",
                    "Sulphuric acid (H₂SO₄)",
                    "Nitric acid (HNO₃)"
                ],
                correctAnswer: 1
            },
            {
                question: "The chemical formula of Plaster of Paris is:",
                options: ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaCl₂·2H₂O", "CaCO₃"],
                correctAnswer: 1
            },
            {
                question: "Tooth enamel is made up of ______ which gets corroded by ______.",
                options: [
                    "Calcium phosphate, lactic acid",
                    "Calcium carbonate, acetic acid",
                    "Sodium chloride, citric acid",
                    "Potassium nitrate, hydrochloric acid"
                ],
                correctAnswer: 0
            },
            {
                question: "During the preparation of sodium hydroxide, the gas evolved at the anode is:",
                options: ["Hydrogen", "Oxygen", "Chlorine", "Water vapour"],
                correctAnswer: 2
            },
            {
                question: "The pH of a sample of pure water is 7. A few drops of HCl are added to it. What will be its new pH?",
                options: ["Equal to 7", "Greater than 7", "Less than 7", "Zero"],
                correctAnswer: 2
            },
            {
                question: "A salt formed by the reaction of a weak acid and strong base will give a solution that is:",
                options: ["Acidic", "Basic", "Neutral", "Amphoteric"],
                correctAnswer: 1
            },
            {
                question: "Which of the following is used as an antacid?",
                options: [
                    "Sodium hydroxide",
                    "Magnesium hydroxide",
                    "Potassium hydroxide",
                    "Acetic acid"
                ],
                correctAnswer: 1
            },
            {
                question: "Washing soda is:",
                options: ["NaHCO₃", "Na₂CO₃", "Na₂CO₃·10H₂O", "NaOH"],
                correctAnswer: 2
            },
            {
                question: "The process of dissolving an acid or base in water is:",
                options: [
                    "Always endothermic",
                    "Always exothermic",
                    "Can be exo or endothermic",
                    "A physical change only"
                ],
                correctAnswer: 1
            }
        ]
    },
    "ch3": {
        title: "Chapter 3: Metals and Non-metals",
        questions: [
            {
                question: "Which of the following metals is stored in kerosene oil?",
                options: ["Copper", "Sodium", "Iron", "Gold"],
                correctAnswer: 1
            },
            {
                question: "The property of metals by which they can be beaten into thin sheets is called:",
                options: ["Malleability", "Ductility", "Conductivity", "Sonority"],
                correctAnswer: 0
            },
            {
                question: "Which of the following is the most ductile metal?",
                options: ["Silver", "Gold", "Copper", "Aluminium"],
                correctAnswer: 1
            },
            {
                question: "An alloy of mercury with other metals is called:",
                options: ["Amalgam", "Solution", "Suspension", "Emulsion"],
                correctAnswer: 0
            },
            {
                question: "Which of the following metals reacts vigorously with oxygen?",
                options: ["Iron", "Copper", "Magnesium", "Silver"],
                correctAnswer: 2
            },
            {
                question: "The process of coating iron with zinc to prevent rusting is called:",
                options: ["Galvanization", "Alloying", "Annealing", "Smelting"],
                correctAnswer: 0
            },
            {
                question: "Which non-metal is a good conductor of electricity?",
                options: ["Graphite", "Sulphur", "Phosphorus", "Nitrogen"],
                correctAnswer: 0
            },
            {
                question: "The metal which is liquid at room temperature is:",
                options: ["Sodium", "Mercury", "Bromine", "Gallium"],
                correctAnswer: 1
            },
            {
                question: "Which of the following is not a property of non-metals?",
                options: [
                    "Poor conductors of heat",
                    "Form acidic oxides",
                    "Have high melting points",
                    "Are brittle"
                ],
                correctAnswer: 2
            },
            {
                question: "Which gas is produced when metals react with acids?",
                options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide"],
                correctAnswer: 2
            }
        ]
    },
    "ch4": {
        title: "Chapter 4: Carbon and its Compounds",
        questions: [
            {
                question: "Which of the following is the molecular formula of butane?",
                options: ["C₃H₈", "C₄H₁₀", "C₅H₁₂", "C₂H₆"],
                correctAnswer: 1
            },
            {
                question: "Soap molecules form structures called ______ in water.",
                options: ["Micelles", "Ions", "Crystals", "Polymers"],
                correctAnswer: 0
            },
            {
                question: "Which functional group is present in alcohols?",
                options: ["-COOH", "-CHO", "-OH", "-CO"],
                correctAnswer: 2
            },
            {
                question: "Vinegar contains which acid?",
                options: ["Citric acid", "Acetic acid", "Lactic acid", "Formic acid"],
                correctAnswer: 1
            },
            {
                question: "Which of the following is a saturated hydrocarbon?",
                options: ["C₂H₄", "C₃H₆", "C₄H₁₀", "C₂H₂"],
                correctAnswer: 2
            },
            {
                question: "The process of converting vegetable oil to vegetable ghee is called:",
                options: ["Hydrogenation", "Oxidation", "Saponification", "Esterification"],
                correctAnswer: 0
            },
            {
                question: "Which compound gives vinegar its sour taste?",
                options: ["Ethanol", "Methanol", "Acetic acid", "Formic acid"],
                correctAnswer: 2
            },
            {
                question: "Denatured alcohol is ethanol mixed with:",
                options: ["Methanol", "Water", "Kerosene", "Petrol"],
                correctAnswer: 0
            },
            {
                question: "Which of the following is used as an antifreeze in automobiles?",
                options: ["Ethanol", "Methanol", "Ethylene glycol", "Glycerol"],
                correctAnswer: 2
            },
            {
                question: "The IUPAC name of CH₃COOH is:",
                options: ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Butanoic acid"],
                correctAnswer: 1
            }
        ]
    },
    "ch5": {
        title: "Chapter 5: Life Processes",
        questions: [
            {
                question: "The autotrophic mode of nutrition requires:",
                options: [
                    "Carbon dioxide and water",
                    "Chlorophyll",
                    "Sunlight",
                    "All of the above"
                ],
                correctAnswer: 3
            },
            {
                question: "The opening and closing of stomatal pores is controlled by:",
                options: ["Xylem", "Phloem", "Guard cells", "Root pressure"],
                correctAnswer: 2
            },
            {
                question: "In human digestive system, bile is secreted by:",
                options: ["Pancreas", "Liver", "Kidney", "Stomach"],
                correctAnswer: 1
            },
            {
                question: "During respiration, the exchange of gases in the alveoli occurs by:",
                options: ["Osmosis", "Diffusion", "Active transport", "Phagocytosis"],
                correctAnswer: 1
            },
            {
                question: "Which chamber of the human heart has the thickest muscular wall?",
                options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
                correctAnswer: 3
            },
            {
                question: "The filtration units in kidneys are called:",
                options: ["Ureter", "Urethra", "Neurons", "Nephrons"],
                correctAnswer: 3
            },
            {
                question: "Xylem in plants is responsible for the transport of:",
                options: ["Water and minerals", "Food", "Amino acids", "Oxygen"],
                correctAnswer: 0
            },
            {
                question: "Which enzyme is present in saliva that breaks down starch?",
                options: ["Trypsin", "Pepsin", "Amylase", "Lipase"],
                correctAnswer: 2
            },
            {
                question: "The process of breaking down glucose with the release of energy in the absence of oxygen is called:",
                options: ["Aerobic respiration", "Anaerobic respiration", "Photosynthesis", "Transpiration"],
                correctAnswer: 1
            },
            {
                question: "In the process of excretion, the term 'urine' refers to:",
                options: [
                    "Blood without cells",
                    "Water with dissolved salts",
                    "The filtrate containing urea, salts, and excess water",
                    "Undigested food"
                ],
                correctAnswer: 2
            }
        ]
    },
    "ch6": {
        title: "Chapter 6: Control and Coordination",
        questions: [
            {
                question: "Which plant hormone promotes cell division?",
                options: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
                correctAnswer: 2
            },
            {
                question: "The junction between two neurons is called:",
                options: ["Synapse", "Dendrite", "Axon", "Impulse"],
                correctAnswer: 0
            },
            {
                question: "Which part of the brain controls balance and posture?",
                options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
                correctAnswer: 1
            },
            {
                question: "Iodine is necessary for the synthesis of which hormone?",
                options: ["Adrenaline", "Thyroxine", "Insulin", "Estrogen"],
                correctAnswer: 1
            },
            {
                question: "Which of the following is not a reflex action?",
                options: ["Salivation", "Blinking", "Reading", "Knee jerk"],
                correctAnswer: 2
            },
            {
                question: "The growth of pollen tubes towards ovules is due to:",
                options: ["Geotropism", "Phototropism", "Chemotropism", "Hydrotropism"],
                correctAnswer: 2
            },
            {
                question: "Which gland is known as the master gland?",
                options: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
                correctAnswer: 1
            },
            {
                question: "Disease caused by deficiency of iodine is:",
                options: ["Diabetes", "Goitre", "Anaemia", "Rickets"],
                correctAnswer: 1
            },
            {
                question: "The hormone that increases blood sugar level is:",
                options: ["Insulin", "Glucagon", "Adrenaline", "Thyroxine"],
                correctAnswer: 1
            },
            {
                question: "Which part of neuron receives information?",
                options: ["Axon", "Dendrite", "Cell body", "Nucleus"],
                correctAnswer: 1
            }
        ]
    },
    "ch7": {
        title: "Chapter 7: How do Organisms Reproduce",
        questions: [
            {
                question: "Binary fission is observed in:",
                options: ["Hydra", "Yeast", "Amoeba", "Spirogyra"],
                correctAnswer: 2
            },
            {
                question: "Which is not a method of vegetative propagation?",
                options: ["Cutting", "Grafting", "Layering", "Pollination"],
                correctAnswer: 3
            },
            {
                question: "The male reproductive part of a flower is:",
                options: ["Stamen", "Pistil", "Ovary", "Sepal"],
                correctAnswer: 0
            },
            {
                question: "In human females, fertilization occurs in:",
                options: ["Ovary", "Uterus", "Vagina", "Fallopian tube"],
                correctAnswer: 3
            },
            {
                question: "Which contraceptive method prevents implantation?",
                options: ["Condom", "Copper-T", "Oral pills", "Diaphragm"],
                correctAnswer: 1
            },
            {
                question: "The process of release of ovum from ovary is called:",
                options: ["Menstruation", "Ovulation", "Fertilization", "Implantation"],
                correctAnswer: 1
            },
            {
                question: "Which of the following reproduces by fragmentation?",
                options: ["Planaria", "Spirogyra", "Hydra", "All of these"],
                correctAnswer: 3
            },
            {
                question: "The period during adolescence when reproductive organs mature is called:",
                options: ["Menopause", "Puberty", "Gestation", "Menstruation"],
                correctAnswer: 1
            },
            {
                question: "The developing zygote is called:",
                options: ["Embryo", "Foetus", "Blastocyst", "Morula"],
                correctAnswer: 0
            },
            {
                question: "Which STD is caused by bacteria?",
                options: ["AIDS", "Syphilis", "Hepatitis", "Herpes"],
                correctAnswer: 1
            }
        ]
    },
    "ch8": {
        title: "Chapter 8: Light - Reflection and Refraction",
        questions: [
            {
                question: "A ray of light strikes a plane mirror at an angle of incidence of 40°. The angle of reflection is:",
                options: ["30°", "40°", "50°", "90°"],
                correctAnswer: 1
            },
            {
                question: "The image formed by a concave mirror is virtual, erect, and magnified when the object is placed:",
                options: [
                    "At the focus",
                    "Between the pole and focus",
                    "At the centre of curvature",
                    "Beyond the centre of curvature"
                ],
                correctAnswer: 1
            },
            {
                question: "The refractive index of diamond is 2.42. This means:",
                options: [
                    "Speed of light in diamond is 2.42 times that in vacuum.",
                    "Speed of light in vacuum is 2.42 times that in diamond.",
                    "Diamond is 2.42 times denser than water.",
                    "Angle of incidence in diamond is 2.42 times the angle of refraction."
                ],
                correctAnswer: 1
            },
            {
                question: "A student obtains a blurred image of an object on a screen. To get a sharp image, he must move the lens:",
                options: [
                    "Towards the screen",
                    "Away from the screen",
                    "Either towards or away from the screen depending on the position",
                    "Nothing can be done"
                ],
                correctAnswer: 2
            },
            {
                question: "The power of a lens is -2.0 D. Its focal length is:",
                options: ["+50 cm", "-50 cm", "+2 m", "-0.5 m"],
                correctAnswer: 1
            },
            {
                question: "In which of the following, the final image is always erect and diminished?",
                options: [
                    "Simple microscope",
                    "Compound microscope",
                    "Astronomical telescope",
                    "Terrestrial telescope"
                ],
                correctAnswer: 3
            },
            {
                question: "The phenomenon of splitting of white light into its constituent colours is called:",
                options: ["Reflection", "Refraction", "Dispersion", "Scattering"],
                correctAnswer: 2
            },
            {
                question: "The SI unit of power of a lens is:",
                options: ["Metre", "Dioptre", "Candela", "Joule"],
                correctAnswer: 1
            },
            {
                question: "A convex lens forms a real and inverted image of an object. The object is placed:",
                options: [
                    "Between F and 2F",
                    "At F",
                    "Between F and optical centre",
                    "Beyond 2F"
                ],
                correctAnswer: 0
            },
            {
                question: "The rearview mirror in a car is usually a:",
                options: ["Concave mirror", "Convex mirror", "Plane mirror", "Cylindrical mirror"],
                correctAnswer: 1
            }
        ]
    },
    "ch9": {
        title: "Chapter 9: Human Eye and Colourful World",
        questions: [
            {
                question: "The defect of vision in which a person cannot see distant objects clearly is called:",
                options: ["Myopia", "Hypermetropia", "Presbyopia", "Astigmatism"],
                correctAnswer: 0
            },
            {
                question: "Which part of the eye controls the amount of light entering?",
                options: ["Cornea", "Iris", "Pupil", "Retina"],
                correctAnswer: 1
            },
            {
                question: "The phenomenon of scattering of light by colloidal particles is called:",
                options: ["Tyndall effect", "Dispersion", "Refraction", "Reflection"],
                correctAnswer: 0
            },
            {
                question: "The colour of sky appears blue due to:",
                options: [
                    "Reflection of light",
                    "Refraction of light",
                    "Scattering of light",
                    "Dispersion of light"
                ],
                correctAnswer: 2
            },
            {
                question: "The splitting of white light into seven colours is due to:",
                options: ["Reflection", "Refraction", "Dispersion", "Scattering"],
                correctAnswer: 2
            },
            {
                question: "Which lens is used to correct hypermetropia?",
                options: ["Concave lens", "Convex lens", "Cylindrical lens", "Bifocal lens"],
                correctAnswer: 1
            },
            {
                question: "The ability of eye to focus on both near and distant objects is called:",
                options: ["Accommodation", "Adaptation", "Refraction", "Convergence"],
                correctAnswer: 0
            },
            {
                question: "At sunrise and sunset, the sun appears red because:",
                options: [
                    "Red light is scattered the most",
                    "Red light is scattered the least",
                    "Blue light is absorbed",
                    "All colours are scattered equally"
                ],
                correctAnswer: 1
            },
            {
                question: "The defect of vision due to gradual weakening of ciliary muscles is:",
                options: ["Myopia", "Hypermetropia", "Presbyopia", "Astigmatism"],
                correctAnswer: 2
            },
            {
                question: "Which cells in retina are sensitive to bright light?",
                options: ["Rods", "Cones", "Both rods and cones", "Optic nerve cells"],
                correctAnswer: 1
            }
        ]
    },
    "ch10": {
        title: "Chapter 10: Electricity",
        questions: [
            {
                question: "The SI unit of electric current is:",
                options: ["Volt", "Ohm", "Ampere", "Coulomb"],
                correctAnswer: 2
            },
            {
                question: "Two resistors, R1 and R2, are connected in series. Their equivalent resistance is:",
                options: ["R1 + R2", "1/R1 + 1/R2", "R1R2/(R1+R2)", "(R1+R2)/R1R2"],
                correctAnswer: 0
            },
            {
                question: "The heating element of an electric heater is made of:",
                options: ["Copper", "Tungsten", "Nichrome", "Aluminum"],
                correctAnswer: 2
            },
            {
                question: "According to Ohm's law:",
                options: ["V ∝ I", "V ∝ 1/I", "I ∝ R", "R ∝ 1/V"],
                correctAnswer: 0
            },
            {
                question: "The commercial unit of electrical energy is:",
                options: ["Watt", "Kilowatt-hour (kWh)", "Joule", "Kilowatt"],
                correctAnswer: 1
            },
            {
                question: "The rate at which electric energy is consumed is called:",
                options: ["Electric power", "Electric current", "Electric potential", "Electrical resistance"],
                correctAnswer: 0
            },
            {
                question: "A wire of resistance R is cut into three equal parts. These parts are then connected in parallel. The equivalent resistance is:",
                options: ["R/9", "R/3", "R", "3R"],
                correctAnswer: 0
            },
            {
                question: "The filament of an electric bulb is made of tungsten because it has:",
                options: [
                    "Low melting point",
                    "High resistivity and high melting point",
                    "Low resistivity",
                    "High malleability"
                ],
                correctAnswer: 1
            },
            {
                question: "In a household electric circuit, appliances are connected in:",
                options: [
                    "Series to have the same current",
                    "Parallel to have the same potential difference",
                    "Series to save wire",
                    "Parallel to reduce resistance"
                ],
                correctAnswer: 1
            },
            {
                question: "The purpose of a fuse in an electrical circuit is to:",
                options: ["Increase current", "Prevent overheating and fires", "Reduce power consumption", "Increase voltage"],
                correctAnswer: 1
            }
        ]
    }
};

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
    initSounds();
    initializeChaptersGrid();
    createMCQPages();
    addSoundToggle();
});

// Create sound toggle button
function addSoundToggle() {
    const header = document.getElementById('mainMenu');
    if (header) {
        const soundToggle = document.createElement('button');
        soundToggle.id = 'soundToggle';
        soundToggle.className = 'sound-toggle';
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
    }
}

// Create chapters grid
function initializeChaptersGrid() {
    const chaptersGrid = document.getElementById('chaptersGrid');
    
    chapters.forEach(chapter => {
        const chapterBtn = document.createElement('button');
        chapterBtn.className = 'chapter-btn';
        chapterBtn.setAttribute('data-chapter', chapter.id);
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

// Create MCQ pages for all chapters
function createMCQPages() {
    const container = document.getElementById('mcqPagesContainer');
    
    Object.keys(mcqData).forEach(chapterId => {
        const chapter = mcqData[chapterId];
        
        const mcqPage = document.createElement('div');
        mcqPage.className = 'mcq-page';
        mcqPage.id = `page-${chapterId}`;
        
        // Create header
        mcqPage.innerHTML = `
            <div class="mcq-header">
                <button class="back-btn" onclick="goBackToMenu()">
                    <i class="fas fa-arrow-left"></i> Back to Chapters
                </button>
                <h2 class="chapter-title">${chapter.title}</h2>
                <div class="progress-info">
                    <div>Progress: <span id="progress-${chapterId}">0%</span></div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="progressFill-${chapterId}"></div>
                    </div>
                </div>
            </div>
            
            <div class="mcq-container" id="container-${chapterId}">
                <!-- Questions will be inserted here -->
            </div>
            
            <div class="results-panel hidden" id="results-${chapterId}">
                <div class="score-circle">
                    <div class="score-percent" id="scorePercent-${chapterId}">0%</div>
                    <div class="score-text">Score</div>
                </div>
                <h3>Chapter Performance</h3>
                <div class="results-details">
                    <div class="result-stat correct">
                        <div class="number" id="correctCount-${chapterId}">0</div>
                        <div>Correct</div>
                    </div>
                    <div class="result-stat wrong">
                        <div class="number" id="wrongCount-${chapterId}">0</div>
                        <div>Wrong</div>
                    </div>
                    <div class="result-stat attempted">
                        <div class="number" id="attemptedCount-${chapterId}">0</div>
                        <div>Attempted</div>
                    </div>
                </div>
                <button class="back-btn" style="margin-top: 20px;" onclick="resetChapter('${chapterId}')">
                    <i class="fas fa-redo"></i> Try Again
                </button>
            </div>
        `;
        
        container.appendChild(mcqPage);
        
        // Create questions for this chapter
        createQuestionsForChapter(chapterId);
    });
}

// Create questions for a specific chapter
function createQuestionsForChapter(chapterId) {
    const container = document.getElementById(`container-${chapterId}`);
    const chapter = mcqData[chapterId];
    
    chapter.questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'mcq-item';
        questionElement.id = `q-${chapterId}-${index}`;
        questionElement.innerHTML = `
            <div class="question">Q${index + 1}. ${question.question}</div>
            <div class="options-container">
                ${question.options.map((option, optIndex) => `
                    <div class="option" data-answer="${optIndex}">
                        <input type="checkbox" id="opt-${chapterId}-${index}-${optIndex}">
                        <label for="opt-${chapterId}-${index}-${optIndex}">${option}</label>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(questionElement);
        
        // Add event listeners to options
        const options = questionElement.querySelectorAll('.option');
        options.forEach(option => {
            const checkbox = option.querySelector('input[type="checkbox"]');
            
            checkbox.addEventListener('change', () => {
                playSound('click');
                
                // For single choice (radio behavior), uncheck other options
                options.forEach(otherOption => {
                    if (otherOption !== option) {
                        otherOption.querySelector('input[type="checkbox"]').checked = false;
                        otherOption.classList.remove('selected');
                    }
                });
                
                if (checkbox.checked) {
                    option.classList.add('selected');
                    checkAnswer(chapterId, index, parseInt(option.dataset.answer));
                } else {
                    option.classList.remove('selected');
                }
                
                updateProgress(chapterId);
            });
            
            // Remove blue highlight
            option.addEventListener('mousedown', function(e) {
                e.preventDefault();
            });
        });
    });
}

// Check the answer for a question
function checkAnswer(chapterId, questionIndex, selectedAnswer) {
    const question = mcqData[chapterId].questions[questionIndex];
    const questionElement = document.getElementById(`q-${chapterId}-${questionIndex}`);
    const options = questionElement.querySelectorAll('.option');
    
    // Reset all options styling
    options.forEach(option => {
        option.classList.remove('correct-answer', 'wrong-answer');
    });
    
    // Mark correct answer in green
    options[question.correctAnswer].classList.add('correct-answer');
    
    // Mark selected answer if wrong
    if (selectedAnswer !== question.correctAnswer) {
        options[selectedAnswer].classList.add('wrong-answer');
        questionElement.classList.add('wrong');
        playSound('wrong');
    } else {
        questionElement.classList.add('correct');
        playSound('correct');
    }
    
    // Disable all checkboxes after answering
    options.forEach(option => {
        option.querySelector('input[type="checkbox"]').disabled = true;
    });
}

// Update progress for a chapter
function updateProgress(chapterId) {
    const chapter = mcqData[chapterId];
    let answeredCount = 0;
    
    chapter.questions.forEach((question, index) => {
        const questionElement = document.getElementById(`q-${chapterId}-${index}`);
        const options = questionElement.querySelectorAll('input[type="checkbox"]:checked');
        if (options.length > 0) {
            answeredCount++;
        }
    });
    
    const progress = (answeredCount / chapter.questions.length) * 100;
    document.getElementById(`progress-${chapterId}`).textContent = `${Math.round(progress)}%`;
    document.getElementById(`progressFill-${chapterId}`).style.width = `${progress}%`;
    
    // Show results if all questions answered
    if (answeredCount === chapter.questions.length) {
        setTimeout(() => {
            playSound('success');
            showResults(chapterId);
        }, 500);
    }
}

// Show results for a chapter
function showResults(chapterId) {
    const chapter = mcqData[chapterId];
    let correctCount = 0;
    let wrongCount = 0;
    
    chapter.questions.forEach((question, index) => {
        const questionElement = document.getElementById(`q-${chapterId}-${index}`);
        if (questionElement.classList.contains('correct')) {
            correctCount++;
        } else if (questionElement.classList.contains('wrong')) {
            wrongCount++;
        }
    });
    
    const score = Math.round((correctCount / chapter.questions.length) * 100);
    
    document.getElementById(`scorePercent-${chapterId}`).textContent = `${score}%`;
    document.getElementById(`correctCount-${chapterId}`).textContent = correctCount;
    document.getElementById(`wrongCount-${chapterId}`).textContent = wrongCount;
    document.getElementById(`attemptedCount-${chapterId}`).textContent = chapter.questions.length;
    
    document.getElementById(`results-${chapterId}`).classList.remove('hidden');
    
    // Scroll to results
    setTimeout(() => {
        document.getElementById(`results-${chapterId}`).scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 300);
}

// Open a specific chapter
function openChapter(chapterId) {
    playSound('page');
    
    // Hide chapters grid
    document.getElementById('chaptersGrid').style.display = 'none';
    
    // Show the selected chapter page
    document.getElementById(`page-${chapterId}`).classList.add('active');
    
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

// Reset a chapter (try again)
function resetChapter(chapterId) {
    playSound('click');
    
    const chapter = mcqData[chapterId];
    
    // Reset all questions
    chapter.questions.forEach((question, index) => {
        const questionElement = document.getElementById(`q-${chapterId}-${index}`);
        questionElement.classList.remove('correct', 'wrong');
        
        const options = questionElement.querySelectorAll('.option');
        options.forEach(option => {
            option.classList.remove('selected', 'correct-answer', 'wrong-answer');
            const checkbox = option.querySelector('input[type="checkbox"]');
            checkbox.checked = false;
            checkbox.disabled = false;
        });
    });
    
    // Hide results
    document.getElementById(`results-${chapterId}`).classList.add('hidden');
    
    // Reset progress
    document.getElementById(`progress-${chapterId}`).textContent = '0%';
    document.getElementById(`progressFill-${chapterId}`).style.width = '0%';
    
    // Scroll to top of chapter
    setTimeout(() => {
        document.getElementById(`container-${chapterId}`).scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 300);
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