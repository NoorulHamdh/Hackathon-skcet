// BrainSTEM Learning Platform JavaScript

// Application Data
const appData = {
  "student_profile": {
    "name": "Jessica",
    "points": 1247,
    "level": 8,
    "daily_goal_progress": 60,
    "streak_days": 7,
    "games_completed_today": 3,
    "total_games_today": 5
  },
  "achievements": [
    {
      "id": "math_master",
      "name": "Math Master",
      "description": "Solved 50 equations",
      "icon": "🏆",
      "color": "#4CAF50",
      "unlocked": true,
      "progress": 100
    },
    {
      "id": "science_explorer", 
      "name": "Science Explorer",
      "description": "Completed 10 experiments",
      "icon": "🔬",
      "color": "#9C27B0",
      "unlocked": true,
      "progress": 100
    },
    {
      "id": "tech_genius",
      "name": "Tech Genius", 
      "description": "Perfect coding score",
      "icon": "💻",
      "color": "#2196F3",
      "unlocked": true,
      "progress": 100
    },
    {
      "id": "engineer_pro",
      "name": "Engineer Pro",
      "description": "Built 5 structures",
      "icon": "⚙️",
      "color": "#FF5722",
      "unlocked": true,
      "progress": 100
    },
    {
      "id": "village_scholar",
      "name": "Village Scholar",
      "description": "Top student this month",
      "icon": "🎓",
      "color": "#FF9800",
      "unlocked": false,
      "progress": 75
    }
  ],
  "learning_categories": [
    {
      "id": "science",
      "name": "Science",
      "description": "Chemistry, Physics, Biology", 
      "color": "#9C27B0",
      "gradient": "linear-gradient(135deg, #9C27B0 0%, #E1BEE7 100%)",
      "icon": "⚗️",
      "subjects": [
        {
          "id": "chemistry",
          "name": "Chemistry",
          "lessons_completed": 12,
          "total_lessons": 20,
          "icon": "🧪"
        },
        {
          "id": "physics", 
          "name": "Physics",
          "lessons_completed": 8,
          "total_lessons": 15,
          "icon": "⚡"
        },
        {
          "id": "biology",
          "name": "Biology", 
          "lessons_completed": 15,
          "total_lessons": 18,
          "icon": "🌱"
        }
      ]
    },
    {
      "id": "technology",
      "name": "Technology",
      "description": "Coding, Logic, Algorithms",
      "color": "#2196F3", 
      "gradient": "linear-gradient(135deg, #2196F3 0%, #BBDEFB 100%)",
      "icon": "💻",
      "subjects": [
        {
          "id": "coding",
          "name": "Coding",
          "lessons_completed": 6,
          "total_lessons": 12,
          "icon": "👨‍💻"
        },
        {
          "id": "logic",
          "name": "Logic",
          "lessons_completed": 10,
          "total_lessons": 14,
          "icon": "🧠"
        },
        {
          "id": "algorithms",
          "name": "Algorithms", 
          "lessons_completed": 4,
          "total_lessons": 10,
          "icon": "🔄"
        }
      ]
    },
    {
      "id": "mathematics",
      "name": "Mathematics",
      "description": "Algebra, Geometry, Statistics",
      "color": "#4CAF50",
      "gradient": "linear-gradient(135deg, #4CAF50 0%, #C8E6C9 100%)",
      "icon": "📊",
      "subjects": [
        {
          "id": "algebra",
          "name": "Algebra", 
          "lessons_completed": 18,
          "total_lessons": 22,
          "icon": "🔢"
        },
        {
          "id": "geometry",
          "name": "Geometry",
          "lessons_completed": 11,
          "total_lessons": 16,
          "icon": "📐"
        }
      ]
    }
  ],
  "daily_challenges": [
    {
      "id": "math_challenge",
      "title": "Solve 5 Algebra Problems",
      "progress": 3,
      "target": 5,
      "points": 50,
      "completed": false
    },
    {
      "id": "science_challenge", 
      "title": "Complete Chemistry Lab",
      "progress": 1,
      "target": 1,
      "points": 75,
      "completed": true
    },
    {
      "id": "streak_challenge",
      "title": "Maintain 7-Day Streak",
      "progress": 7,
      "target": 7, 
      "points": 100,
      "completed": true
    }
  ],
  "interactive_games": [
    {
      "id": "math_quiz",
      "title": "Math Problem Solver",
      "category": "mathematics", 
      "difficulty": "medium",
      "points": 25,
      "questions": [
        {
          "question": "What is 15 + 27?",
          "options": ["40", "42", "45", "48"],
          "correct": 1,
          "explanation": "15 + 27 = 42"
        },
        {
          "question": "Solve for x: 3x = 21",
          "options": ["6", "7", "8", "9"], 
          "correct": 1,
          "explanation": "x = 21 ÷ 3 = 7"
        },
        {
          "question": "What is the area of a rectangle with length 8 and width 5?",
          "options": ["35", "40", "45", "50"],
          "correct": 1,
          "explanation": "Area = length × width = 8 × 5 = 40"
        }
      ]
    },
    {
      "id": "chemistry_lab",
      "title": "Virtual Chemistry Lab",
      "category": "science",
      "difficulty": "easy",
      "points": 35,
      "experiments": [
        {
          "name": "Acid-Base Reaction",
          "description": "Mix acids and bases to observe reactions",
          "materials": ["HCl", "NaOH", "Indicator"],
          "steps": ["Add HCl to beaker", "Add indicator", "Slowly add NaOH", "Observe color change"]
        }
      ]
    },
    {
      "id": "logic_puzzle",
      "title": "Programming Logic",
      "category": "technology", 
      "difficulty": "medium",
      "points": 40,
      "puzzles": [
        {
          "problem": "Create a sequence: If input is 5, output should be 1,2,3,4,5",
          "solution": "for i in range(1, n+1): print(i)",
          "hint": "Use a loop to iterate from 1 to n"
        }
      ]
    }
  ],
  "leaderboard": [
    {
      "rank": 1,
      "name": "Jessica", 
      "points": 1247,
      "school": "Village High School"
    },
    {
      "rank": 2,
      "name": "Rahul",
      "points": 1156,
      "school": "Rural Academy"
    },
    {
      "rank": 3,
      "name": "Priya",
      "points": 1089,
      "school": "Community School"
    },
    {
      "rank": 4,
      "name": "Arjun", 
      "points": 987,
      "school": "Village High School"
    }
  ],
  "teacher_dashboard": {
    "class_overview": {
      "total_students": 25,
      "active_today": 18,
      "average_progress": 65,
      "total_activities_completed": 342
    },
    "top_performers": [
      {"name": "Jessica", "progress": 85, "points": 1247},
      {"name": "Rahul", "progress": 78, "points": 1156},
      {"name": "Priya", "progress": 72, "points": 1089}
    ],
    "subject_performance": [
      {"subject": "Mathematics", "average_score": 78, "completion_rate": 85},
      {"subject": "Science", "average_score": 72, "completion_rate": 79},
      {"subject": "Technology", "average_score": 68, "completion_rate": 71}
    ]
  }
};

// Game State
let currentGame = null;
let gameState = {
    currentQuestion: 0,
    score: 0,
    answers: []
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateProgressRing();
});

function initializeApp() {
    populateDashboard();
    populateLearningCategories();
    populateAchievements();
    populateLeaderboard();
    populateTeacherDashboard();
}

function setupEventListeners() {
    // Navigation - Fixed event listener setup
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetView = this.getAttribute('data-view');
            switchView(targetView);
            
            // Update active nav button
            navBtns.forEach(navBtn => navBtn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close game modal
    const closeGameBtn = document.getElementById('close-game');
    const gameModal = document.getElementById('game-modal');
    
    closeGameBtn.addEventListener('click', closeGameModal);
    gameModal.addEventListener('click', (e) => {
        if (e.target === gameModal) {
            closeGameModal();
        }
    });
}

function switchView(viewName) {
    const views = document.querySelectorAll('.view');
    views.forEach(view => view.classList.remove('active'));
    const targetView = document.getElementById(`${viewName}-view`);
    if (targetView) {
        targetView.classList.add('active');
    }
}

function populateDashboard() {
    // Populate daily challenges
    const challengeList = document.getElementById('challenge-list');
    if (challengeList) {
        challengeList.innerHTML = appData.daily_challenges.map(challenge => `
            <div class="challenge-item ${challenge.completed ? 'challenge-completed' : ''}">
                <div class="challenge-info">
                    <h4>${challenge.title}</h4>
                    <div class="challenge-progress">${challenge.progress}/${challenge.target} completed</div>
                </div>
                <div class="challenge-points">
                    <span>+${challenge.points}</span>
                    <span>XP</span>
                </div>
            </div>
        `).join('');
    }

    // Populate recent achievements
    const achievementPreview = document.getElementById('achievement-preview');
    if (achievementPreview) {
        const unlockedAchievements = appData.achievements.filter(a => a.unlocked).slice(0, 3);
        achievementPreview.innerHTML = unlockedAchievements.map(achievement => `
            <div class="achievement-badge-small">
                <span>${achievement.icon}</span>
                <span>${achievement.name}</span>
            </div>
        `).join('');
    }
}

function populateLearningCategories() {
    const categoriesGrid = document.getElementById('categories-grid');
    if (categoriesGrid) {
        categoriesGrid.innerHTML = appData.learning_categories.map(category => `
            <div class="category-card" data-category="${category.id}">
                <div class="category-header">
                    <span class="category-icon">${category.icon}</span>
                    <div class="category-info">
                        <h3>${category.name}</h3>
                        <p class="category-description">${category.description}</p>
                    </div>
                </div>
                <div class="subjects-list">
                    ${category.subjects.map(subject => `
                        <div class="subject-item" data-subject="${subject.id}" data-category="${category.id}">
                            <div class="subject-info">
                                <span class="subject-icon">${subject.icon}</span>
                                <span class="subject-name">${subject.name}</span>
                            </div>
                            <div class="subject-progress">${subject.lessons_completed}/${subject.total_lessons}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        // Add click handlers for subjects - Fixed with proper event delegation
        setTimeout(() => {
            const subjectItems = document.querySelectorAll('.subject-item');
            subjectItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const subjectId = this.getAttribute('data-subject');
                    const categoryId = this.getAttribute('data-category');
                    launchSubjectGame(subjectId, categoryId);
                });
            });
        }, 100);
    }
}

function populateAchievements() {
    const achievementsGrid = document.getElementById('achievements-grid');
    if (achievementsGrid) {
        achievementsGrid.innerHTML = appData.achievements.map(achievement => `
            <div class="achievement-card ${!achievement.unlocked ? 'locked' : ''}">
                <span class="achievement-icon">${achievement.icon}</span>
                <h3 class="achievement-name">${achievement.name}</h3>
                <p class="achievement-description">${achievement.description}</p>
                <div class="achievement-progress-bar">
                    <div class="achievement-progress-fill" style="width: ${achievement.progress}%"></div>
                </div>
            </div>
        `).join('');
    }
}

function populateLeaderboard() {
    const leaderboardTable = document.getElementById('leaderboard-table');
    if (leaderboardTable) {
        leaderboardTable.innerHTML = appData.leaderboard.map(player => `
            <div class="leaderboard-item ${player.name === appData.student_profile.name ? 'current-user' : ''}">
                <div class="leaderboard-rank">
                    <div class="rank-number">#${player.rank}</div>
                    <div class="user-info">
                        <h4>${player.name}</h4>
                        <p class="user-school">${player.school}</p>
                    </div>
                </div>
                <div class="user-points">${player.points.toLocaleString()}</div>
            </div>
        `).join('');
    }
}

function populateTeacherDashboard() {
    // Overview stats
    const overviewStats = document.getElementById('overview-stats');
    if (overviewStats) {
        const overview = appData.teacher_dashboard.class_overview;
        overviewStats.innerHTML = `
            <div class="overview-stat">
                <span class="overview-stat-value">${overview.total_students}</span>
                <span class="overview-stat-label">Total Students</span>
            </div>
            <div class="overview-stat">
                <span class="overview-stat-value">${overview.active_today}</span>
                <span class="overview-stat-label">Active Today</span>
            </div>
            <div class="overview-stat">
                <span class="overview-stat-value">${overview.average_progress}%</span>
                <span class="overview-stat-label">Avg Progress</span>
            </div>
            <div class="overview-stat">
                <span class="overview-stat-value">${overview.total_activities_completed}</span>
                <span class="overview-stat-label">Activities Done</span>
            </div>
        `;
    }

    // Top performers
    const performersList = document.getElementById('performers-list');
    if (performersList) {
        performersList.innerHTML = appData.teacher_dashboard.top_performers.map(performer => `
            <div class="performer-item">
                <div class="performer-info">
                    <h4>${performer.name}</h4>
                    <div class="performer-progress">${performer.progress}% progress</div>
                </div>
                <div class="performer-points">${performer.points}</div>
            </div>
        `).join('');
    }

    // Subject performance
    const subjectStats = document.getElementById('subject-stats');
    if (subjectStats) {
        subjectStats.innerHTML = appData.teacher_dashboard.subject_performance.map(subject => `
            <div class="subject-stat">
                <div class="subject-stat-name">${subject.subject}</div>
                <div class="subject-stat-values">
                    <span class="stat-score">${subject.average_score}% avg</span>
                    <span class="stat-completion">${subject.completion_rate}% complete</span>
                </div>
            </div>
        `).join('');
    }
}

function updateProgressRing() {
    const progressRing = document.querySelector('.progress-ring-progress');
    if (progressRing) {
        const progress = appData.student_profile.daily_goal_progress;
        const circumference = 2 * Math.PI * 52; // radius is 52
        const offset = circumference - (progress / 100) * circumference;
        
        progressRing.style.strokeDasharray = circumference;
        progressRing.style.strokeDashoffset = offset;
    }
}

function launchSubjectGame(subjectId, categoryId) {
    // Find appropriate game based on subject and category
    let game = null;
    
    if (categoryId === 'mathematics' || subjectId === 'algebra' || subjectId === 'geometry') {
        game = appData.interactive_games.find(g => g.id === 'math_quiz');
    } else if (categoryId === 'science' || subjectId === 'chemistry' || subjectId === 'physics' || subjectId === 'biology') {
        game = appData.interactive_games.find(g => g.id === 'chemistry_lab');
    } else if (categoryId === 'technology' || subjectId === 'coding' || subjectId === 'logic' || subjectId === 'algorithms') {
        game = appData.interactive_games.find(g => g.id === 'logic_puzzle');
    }
    
    if (game) {
        startGame(game);
    }
}

function startGame(game) {
    currentGame = game;
    gameState = {
        currentQuestion: 0,
        score: 0,
        answers: []
    };

    const gameTitle = document.getElementById('game-title');
    if (gameTitle) {
        gameTitle.textContent = game.title;
    }
    
    if (game.questions) {
        showQuestion();
    } else if (game.experiments) {
        showChemistryLab();
    } else if (game.puzzles) {
        showLogicPuzzle();
    }
    
    const gameModal = document.getElementById('game-modal');
    if (gameModal) {
        gameModal.classList.remove('hidden');
    }
}

function showQuestion() {
    const question = currentGame.questions[gameState.currentQuestion];
    const gameContent = document.getElementById('game-content');
    
    if (gameContent) {
        gameContent.innerHTML = `
            <div class="game-content">
                <div class="question-container">
                    <h3>Question ${gameState.currentQuestion + 1} of ${currentGame.questions.length}</h3>
                    <p class="question-text">${question.question}</p>
                    <div class="options-grid">
                        ${question.options.map((option, index) => `
                            <button class="option-btn" data-index="${index}">${option}</button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Add click handlers for options
        const optionButtons = gameContent.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                selectAnswer(parseInt(this.getAttribute('data-index')));
            });
        });
    }
}

function selectAnswer(selectedIndex) {
    const question = currentGame.questions[gameState.currentQuestion];
    const isCorrect = selectedIndex === question.correct;
    
    gameState.answers.push({
        questionIndex: gameState.currentQuestion,
        selected: selectedIndex,
        correct: isCorrect
    });

    if (isCorrect) {
        gameState.score++;
    }

    // Show feedback
    const options = document.querySelectorAll('.option-btn');
    options.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Move to next question or show results
    setTimeout(() => {
        gameState.currentQuestion++;
        if (gameState.currentQuestion < currentGame.questions.length) {
            showQuestion();
        } else {
            showGameResults();
        }
    }, 1500);
}

function showChemistryLab() {
    const experiment = currentGame.experiments[0];
    const gameContent = document.getElementById('game-content');
    
    if (gameContent) {
        gameContent.innerHTML = `
            <div class="game-content">
                <h3>${experiment.name}</h3>
                <p>${experiment.description}</p>
                <div style="margin: 20px 0;">
                    <h4>Materials Needed:</h4>
                    <ul>
                        ${experiment.materials.map(material => `<li>${material}</li>`).join('')}
                    </ul>
                </div>
                <div style="margin: 20px 0;">
                    <h4>Steps:</h4>
                    <ol>
                        ${experiment.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
                <button class="btn btn--primary" onclick="completeExperiment()">Complete Experiment</button>
            </div>
        `;
    }
}

function showLogicPuzzle() {
    const puzzle = currentGame.puzzles[0];
    const gameContent = document.getElementById('game-content');
    
    if (gameContent) {
        gameContent.innerHTML = `
            <div class="game-content">
                <h3>Programming Challenge</h3>
                <p>${puzzle.problem}</p>
                <div style="margin: 20px 0;">
                    <h4>Hint:</h4>
                    <p style="font-style: italic; color: var(--color-text-secondary);">${puzzle.hint}</p>
                </div>
                <textarea 
                    style="width: 100%; height: 100px; margin: 20px 0; padding: 12px; border-radius: 8px; border: 1px solid var(--color-border);"
                    placeholder="Write your code here..."
                    id="code-input"
                ></textarea>
                <button class="btn btn--primary" onclick="checkCode()">Submit Code</button>
            </div>
        `;
    }
}

function completeExperiment() {
    gameState.score = 1;
    showGameResults();
}

function checkCode() {
    const codeInput = document.getElementById('code-input');
    if (codeInput) {
        const userCode = codeInput.value.trim();
        
        // Simple check - in a real app this would be more sophisticated
        if (userCode.includes('for') && userCode.includes('range')) {
            gameState.score = 1;
        } else {
            gameState.score = 0;
        }
    }
    
    showGameResults();
}

function showGameResults() {
    const gameContent = document.getElementById('game-content');
    if (gameContent) {
        const totalQuestions = currentGame.questions ? currentGame.questions.length : 1;
        const percentage = Math.round((gameState.score / totalQuestions) * 100);
        const earnedPoints = Math.round(currentGame.points * (gameState.score / totalQuestions));
        
        // Update user points
        appData.student_profile.points += earnedPoints;
        
        let message = '';
        if (percentage >= 80) {
            message = '🎉 Excellent work!';
        } else if (percentage >= 60) {
            message = '👍 Good job!';
        } else {
            message = '💪 Keep practicing!';
        }
        
        gameContent.innerHTML = `
            <div class="game-results">
                <div class="results-score">${gameState.score}/${totalQuestions}</div>
                <div class="results-message">${message}</div>
                <p>You earned <strong>${earnedPoints} XP</strong>!</p>
                <button class="play-again-btn" onclick="closeGameModal()">Continue Learning</button>
            </div>
        `;
        
        // Update games completed count
        appData.student_profile.games_completed_today++;
        
        // Update dashboard stats
        updateDashboardStats();
    }
}

function closeGameModal() {
    const gameModal = document.getElementById('game-modal');
    if (gameModal) {
        gameModal.classList.add('hidden');
    }
    currentGame = null;
}

function updateDashboardStats() {
    // Update points display
    const pointsDisplay = document.querySelector('.stat-item:nth-child(2) .stat-value');
    if (pointsDisplay) {
        pointsDisplay.textContent = appData.student_profile.points.toLocaleString();
    }
    
    // Update games completed
    const gamesDisplay = document.querySelector('.stat-item:nth-child(3) .stat-value');
    if (gamesDisplay) {
        gamesDisplay.textContent = `${appData.student_profile.games_completed_today}/${appData.student_profile.total_games_today}`;
    }
    
    // Update progress if daily goal completed
    if (appData.student_profile.games_completed_today >= appData.student_profile.total_games_today) {
        appData.student_profile.daily_goal_progress = 100;
        updateProgressRing();
    }
}