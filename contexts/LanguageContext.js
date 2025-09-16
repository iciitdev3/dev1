'use client';

import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

// English translations
const en = {
  // Navigation and Common
  home: 'Home',
  dashboard: 'Dashboard',
  progress: 'Progress',
  assessment: 'Assessment',
  skills: 'Skills',
  back: 'Back',
  next: 'Next',
  previous: 'Previous',
  complete: 'Complete',
  start: 'Start',
  submit: 'Submit',
  cancel: 'Cancel',
  loading: 'Loading...',
  
  // Home Page
  appName: 'SalesMind',
  tagline: 'Mental Wellness for Sales Teams',
  heroTitle: 'Transform Your Sales Performance with Mental Fitness',
  heroDescription: 'Master emotional resilience, build unshakeable confidence, and develop the mental tools to excel in high-pressure sales environments. Start your personalized journey today.',
  takeAssessment: 'Take Assessment',
  goToDashboard: 'Go to Dashboard',
  viewDemo: 'View Demo',
  everythingYouNeed: 'Everything You Need to Excel',
  comprehensiveTools: 'Comprehensive mental wellness tools designed specifically for sales professionals',
  
  // Features
  mentalResilienceTitle: 'Mental Resilience Training',
  mentalResilienceDesc: 'Build emotional strength to bounce back from rejection and maintain peak performance.',
  personalizedSkillTitle: 'Personalized Skill Development',
  personalizedSkillDesc: 'Take a comprehensive assessment and get customized training recommendations.',
  progressTrackingTitle: 'Progress Tracking',
  progressTrackingDesc: 'Monitor your improvement with detailed analytics and progress visualization.',
  salesSpecificTitle: 'Sales-Specific Tools',
  salesSpecificDesc: 'Access drills and exercises designed specifically for sales professionals.',
  
  // Stats
  coreSkills: 'Core Mental Skills',
  interactiveDrills: 'Interactive Drills',
  averageSession: 'Average Session',
  
  // Footer
  footerTagline: 'Empowering sales professionals with mental wellness tools for peak performance.',
  
  // Assessment
  assessmentTitle: 'SalesMind Assessment',
  questionOf: 'Question {current} of {total}',
  progressLabel: 'Progress',
  completeAssessment: 'Complete Assessment',
  
  // Dashboard
  welcomeBack: 'Welcome back, {name}! 👋',
  readyToBoost: 'Ready to boost your sales performance with targeted mental fitness training?',
  overallScore: 'Overall Score',
  drillsCompleted: 'Drills Completed',
  currentStreak: 'Current Streak',
  timeInvested: 'Time Invested',
  consecutiveDays: 'Consecutive days',
  thisWeek: 'This week',
  priorityFocusArea: 'Priority Focus Area',
  recommendedBased: 'Based on your assessment, we recommend focusing on this skill first',
  recommended: 'Recommended',
  startTraining: 'Start Training',
  allMentalSkills: 'All Mental Skills',
  skillsAvailable: '{count} Skills Available',
  exercises: 'exercises',
  recentActivity: 'Recent Activity',
  justCompleted: 'Just completed',
  
  // Skills
  currentProgress: 'Current Progress',
  basedOn: 'Based on:',
  trainingExercises: 'Training Exercises',
  exercisesAvailable: '{count} exercises available',
  startExercise: 'Start Exercise',
  completed: 'Completed',
  
  // Progress
  myProgress: 'My Progress',
  totalCompleted: 'Total Completed',
  allTimeDrills: 'All-time drills',
  weeklyGoal: 'Weekly Goal',
  weeklyActivity: 'Weekly Activity',
  dailyDrillCompletions: 'Your daily drill completions this week',
  skillImprovements: 'Skill Improvements',
  pointIncreases: 'Point increases by skill area',
  recentActivities: 'Recent Activity',
  latestCompleted: 'Your latest completed exercises',
  
  // Skill Names
  emotionalResilience: 'Emotional Resilience to Rejection',
  energyFocus: 'Energy and Focus Management',
  confidenceBuilding: 'Confidence Building',
  stressManagement: 'Stress and Anxiety Management',
  motivation: 'Motivation and Goal Setting',
  communication: 'Communication Skills',
  timeManagement: 'Time Management and Productivity',
  relationshipBuilding: 'Relationship Building',
  adaptability: 'Adaptability and Change Management',
  problemSolving: 'Creative Problem-Solving',
  flexibleThinking: 'Flexible Thinking',
  empathyListening: 'Empathy and Active Listening',
  anxietyManagement: 'Anxiety Management Before Calls',
  
  // Skill Descriptions
  emotionalResilienceDesc: 'Build mental toughness to bounce back quickly from rejection and maintain motivation.',
  energyFocusDesc: 'Optimize your mental energy and maintain sharp focus throughout long sales days.',
  confidenceBuildingDesc: 'Develop unshakeable self-confidence and positive self-talk for sales success.',
  stressManagementDesc: 'Learn proven techniques to manage stress and anxiety in high-pressure situations.',
  motivationDesc: 'Set meaningful goals and maintain high motivation levels for sustained performance.',
  communicationDesc: 'Enhance your verbal and non-verbal communication for better client connections.',
  timeManagementDesc: 'Optimize your schedule and increase productivity with proven time management strategies.',
  relationshipBuildingDesc: 'Develop authentic, long-lasting relationships with clients and colleagues.',
  adaptabilityDesc: 'Develop flexibility and resilience to thrive in changing business environments.',
  problemSolvingDesc: 'Enhance your ability to find innovative solutions to complex sales challenges.',
  flexibleThinkingDesc: 'Overcome rigid thinking patterns and avoid being stuck in single scripts.',
  empathyListeningDesc: 'Build trust and enhance discovery-meeting conversions through deep understanding.',
  anxietyManagementDesc: 'Decrease avoidance behavior and encourage early outreach efforts.',
  
  // Drill Names and Descriptions
  abcCardAnalysis: 'ABC Card Analysis',
  abcCardDesc: 'Identify and challenge negative thought patterns after rejection',
  ninetySecondReset: '90-Second Reset',
  ninetySecondResetDesc: 'Quick breathing exercise to reset your emotional state',
  threeKindFacts: 'Three Kind Facts',
  threeKindFactsDesc: 'Practice self-compassion by listing positive truths about yourself',
  roleplayDialogue: 'AI Client Roleplay',
  roleplayDialogueDesc: 'Practice achieving three reflections within two minutes with an AI client',
  summary30: 'Summary-30 Challenge',
  summary30Desc: 'Recap main conversation points in thirty seconds',
  emotionalLabeling: 'Emotional Labeling Practice',
  emotionalLabelingDesc: 'Identify and label emotions in client scenarios',
  threeAlternatives: 'Three Alternatives to Objections',
  threeAlternativesDesc: 'Devise three creative responses to address common pricing concerns',
  whatIfScenarios: 'What If... Scenario Cards',
  whatIfScenariosDesc: 'Practice adapting your approach when context changes unexpectedly',
  perspectiveReframe: 'Perspective Reframing',
  perspectiveReframeDesc: 'Challenge rigid thinking by exploring multiple viewpoints',
  microExposure: 'Micro-Exposure',
  microExposureDesc: 'Mentally rehearse the first 20 seconds of a call three times',
  woopExercise: 'WOOP Exercise',
  woopExerciseDesc: 'Plan your first call of the day using WOOP method',
  
  // Drill UI Elements
  getStarted: 'Get Started',
  instructions: 'Instructions',
  tips: 'Tips',
  guidance: 'Guidance',
  yourResponse: 'Your Response',
  currentStep: 'Current Step',
  stepOf: 'Step {current} of {total}',
  wellDone: 'Well Done!',
  excellent: 'Excellent!',
  greatWork: 'Great Work!',
  // completed: 'Completed',
  continue: 'Continue',
  finish: 'Finish',
  reset: 'Reset',
  pause: 'Pause',
  resume: 'Resume',
  
  // ABC Card Drill
  abcCardTitle: 'ABC Card Analysis',
  activatingEvent: 'A - Activating Event',
  activatingEventDesc: 'Describe the specific situation that triggered your emotional response. Be objective and factual.',
  activatingEventPlaceholder: 'Example: The client said "no" to my proposal after a 30-minute presentation...',
  activatingEventTip: 'Focus on facts, not interpretations. What actually happened?',
  beliefs: 'B - Beliefs',
  beliefsDesc: 'What thoughts or beliefs went through your mind about this event?',
  beliefsPlaceholder: 'Example: I thought "I\'m terrible at sales, they probably think I\'m incompetent..."',
  beliefsTip: 'Be honest about your automatic thoughts, even if they seem irrational.',
  consequences: 'C - Consequences',
  consequencesDesc: 'How did you feel emotionally and what did you do as a result?',
  consequencesPlaceholder: 'Example: I felt discouraged and anxious. I avoided making calls for the rest of the day...',
  consequencesTip: 'Include both emotional feelings and behavioral responses.',
  dispute: 'D - Dispute',
  disputeDesc: 'Challenge your beliefs. What evidence contradicts your negative thoughts?',
  disputePlaceholder: 'Example: One rejection doesn\'t define my abilities. I\'ve had successful sales before...',
  disputeTip: 'Look for evidence that contradicts your negative beliefs. Be your own advocate.',
  completeAnalysis: 'Complete Analysis',
  nextStep: 'Next Step',
  abcCompleteMessage: 'You\'ve completed the ABC analysis. This cognitive restructuring technique helps build resilience by challenging negative thought patterns.',
  abcProTip: 'Practice this technique regularly, especially after challenging interactions. Over time, you\'ll automatically question negative thoughts before they impact your emotions.',
  
  // Breathing Timer Drill
  breathingTitle: '90-Second Reset',
  breathingSubtitle: '4-7-8 Breathing Pattern for Emotional Reset',
  getComfortable: 'Get comfortable and prepare to begin',
  breatheInSlowly: 'Breathe in slowly through your nose',
  holdBreathGently: 'Hold your breath gently',
  breatheOutSlowly: 'Breathe out slowly through your mouth',
  breathingCycles: 'Breathing Cycles',
  focusTime: 'Focus Time',
  breathingCompleteMessage: 'You\'ve completed the 90-second reset breathing exercise. This technique helps activate your parasympathetic nervous system and reset your emotional state.',
  breathingInstructions: '4-7-8 Breathing Instructions:',
  inhaleInstruction: 'Inhale through your nose for 4 seconds',
  holdInstruction: 'Hold your breath for 7 seconds',
  exhaleInstruction: 'Exhale through your mouth for 8 seconds',
  breathingTip: 'This technique helps activate your body\'s relaxation response and reset your emotional state after challenging interactions.',
  
  // Three Facts Drill
  threeFactsTitle: 'Three Kind Facts',
  threeFactsSubtitle: 'Self-Compassion Exercise for Building Resilience',
  listThreeKindFacts: 'List Three Kind Facts About Yourself',
  kindFactsDesc: 'Think of three positive, true statements about yourself. These should be facts, not opinions - things you know to be true about your character, abilities, or efforts.',
  kindFactsTip: 'Focus on facts about your efforts, growth, relationships, or positive impact. For example: "I always listen carefully to my clients" or "I\'ve improved my presentation skills this year."',
  kindFact: 'Kind Fact',
  kindFactPlaceholder1: 'I am someone who...',
  kindFactPlaceholder2: 'I have the ability to...',
  kindFactPlaceholder3: 'I consistently...',
  exampleKindFacts: 'Example Kind Facts:',
  kindFactExample1: 'I genuinely care about helping my clients find solutions',
  kindFactExample2: 'I bounce back from setbacks and keep trying',
  kindFactExample3: 'I\'ve built meaningful relationships with my colleagues',
  kindFactExample4: 'I\'m always working to improve my skills',
  kindFactExample5: 'I handle difficult conversations with professionalism',
  yourThreeKindFacts: 'Your Three Kind Facts:',
  threeFactsCompleteMessage: 'You\'ve practiced self-compassion by acknowledging your positive qualities. This helps build resilience and emotional strength.',
  threeFactsProTip: 'Return to these facts when facing challenges. Self-compassion is a powerful tool for maintaining confidence and resilience in sales.',
  
  // Common Drill Elements
  duration: 'Duration',
  minutes: 'minutes',
  seconds: 'seconds',
  timeRemaining: 'Time Remaining',
  timeUsed: 'Time Used',
  score: 'Score',
  accuracy: 'Accuracy',
  scenarios: 'Scenarios',
  reflections: 'Reflections',
  alternatives: 'Alternatives',
  adaptations: 'Adaptations',
  
  // Assessment Questions
  assessmentQuestions: {
    emotionalResilience1: 'How quickly do you bounce back after a client rejection?',
    emotionalResilience2: 'When facing repeated \'no\'s, how do you feel?',
    emotionalResilience3: 'How do you handle criticism of your sales approach?',
    energyFocus1: 'How often do you feel mentally drained during the workday?',
    energyFocus2: 'How well can you concentrate during important calls?',
    energyFocus3: 'How do you maintain energy throughout long sales days?',
    confidence1: 'How confident do you feel when approaching new prospects?',
    confidence2: 'How do you feel about your sales abilities?',
    stress1: 'How do you handle high-pressure sales situations?',
    stress2: 'How often do you experience sales-related anxiety?',
    motivation1: 'How motivated are you to achieve your sales targets?',
    motivation2: 'How clear are you about your career goals?',
    communication1: 'How comfortable are you with difficult conversations?',
    communication2: 'How well do you listen to customer needs?',
    timeManagement1: 'How well do you prioritize your daily tasks?',
    timeManagement2: 'How often do you meet your deadlines?',
    relationships1: 'How easily do you build rapport with new clients?',
    relationships2: 'How well do you maintain long-term client relationships?',
    adaptability1: 'How well do you adjust to changing market conditions?',
    adaptability2: 'How do you handle unexpected changes in your sales process?',
    problemSolving1: 'How do you approach complex client problems?',
    problemSolving2: 'How confident are you in finding creative solutions?',
    empathy1: 'How well do you understand your clients\' underlying concerns?',
    empathy2: 'How often do you reflect back what clients say?',
    empathy3: 'How comfortable are you with emotional conversations?',
    anxiety1: 'How often do you delay important calls due to anxiety?',
    anxiety2: 'How comfortable do you feel before making cold calls?',
    anxiety3: 'How do you handle anticipation of difficult conversations?'
  },

  // Assessment Options
  assessmentOptions: {
    emotionalResilience1: ["Immediately", "Within an hour", "Next day", "Days later"],
    emotionalResilience2: ["Motivated to improve", "Slightly discouraged", "Very frustrated", "Want to quit"],
    emotionalResilience3: ["Use it to improve", "Take it personally but recover", "Feel defensive", "Avoid feedback"],
    energyFocus1: ["Rarely", "Sometimes", "Often", "Almost always"],
    energyFocus2: ["Fully focused", "Mostly focused", "Sometimes distracted", "Often distracted"],
    energyFocus3: ["Natural high energy", "Take strategic breaks", "Push through fatigue", "Struggle with fatigue"],
    confidence1: ["Very confident", "Somewhat confident", "Nervous but manage", "Very anxious"],
    confidence2: ["Strong and improving", "Good with room to grow", "Adequate but doubting", "Lack confidence"],
    stress1: ["Thrive under pressure", "Manage well", "Get somewhat anxious", "Feel overwhelmed"],
    stress2: ["Never", "Rarely", "Sometimes", "Frequently"],
    motivation1: ["Extremely motivated", "Very motivated", "Somewhat motivated", "Struggling with motivation"],
    motivation2: ["Very clear path", "Generally clear", "Somewhat unclear", "Very unclear"],
    communication1: ["Very comfortable", "Mostly comfortable", "Somewhat uncomfortable", "Very uncomfortable"],
    communication2: ["Excellent listener", "Good listener", "Average listener", "Need improvement"],
    timeManagement1: ["Very organized", "Mostly organized", "Somewhat scattered", "Very disorganized"],
    timeManagement2: ["Always", "Usually", "Sometimes", "Rarely"],
    relationships1: ["Very easily", "Fairly easily", "With some effort", "With great difficulty"],
    relationships2: ["Excellent", "Good", "Fair", "Poor"],
    adaptability1: ["Very adaptable", "Mostly adaptable", "Somewhat rigid", "Very rigid"],
    adaptability2: ["Embrace change", "Adapt quickly", "Need time to adjust", "Resist change"],
    problemSolving1: ["Systematic approach", "Intuitive problem-solving", "Ask for help", "Feel overwhelmed"],
    problemSolving2: ["Very confident", "Somewhat confident", "Not very confident", "Lack confidence"],
    empathy1: ["Always pick up on emotions", "Usually understand concerns", "Sometimes miss cues", "Often misunderstand needs"],
    empathy2: ["Always paraphrase", "Often reflect", "Sometimes summarize", "Rarely reflect back"],
    empathy3: ["Very comfortable", "Mostly comfortable", "Somewhat uncomfortable", "Very uncomfortable"]
  }
};

// Russian translations
const ru = {
  // Navigation and Common
  home: 'Главная',
  dashboard: 'Панель управления',
  progress: 'Прогресс',
  assessment: 'Оценка',
  skills: 'Навыки',
  back: 'Назад',
  next: 'Далее',
  previous: 'Предыдущий',
  complete: 'Завершить',
  start: 'Начать',
  submit: 'Отправить',
  cancel: 'Отмена',
  loading: 'Загрузка...',
  
  // Home Page
  appName: 'SalesMind',
  tagline: 'Ментальное здоровье для команд продаж',
  heroTitle: 'Трансформируйте свои продажи с помощью ментальной подготовки',
  heroDescription: 'Овладейте эмоциональной устойчивостью, создайте непоколебимую уверенность и развейте ментальные инструменты для успеха в условиях высокого давления. Начните свой персонализированный путь сегодня.',
  takeAssessment: 'Пройти оценку',
  goToDashboard: 'Перейти к панели',
  viewDemo: 'Посмотреть демо',
  everythingYouNeed: 'Всё что вам нужно для успеха',
  comprehensiveTools: 'Комплексные инструменты ментального здоровья, разработанные специально для профессионалов продаж',
  
  // Features
  mentalResilienceTitle: 'Тренировка ментальной устойчивости',
  mentalResilienceDesc: 'Развивайте эмоциональную силу, чтобы быстро восстанавливаться после отказов и поддерживать пиковую производительность.',
  personalizedSkillTitle: 'Персонализированное развитие навыков',
  personalizedSkillDesc: 'Пройдите комплексную оценку и получите индивидуальные рекомендации по обучению.',
  progressTrackingTitle: 'Отслеживание прогресса',
  progressTrackingDesc: 'Отслеживайте свои улучшения с помощью детальной аналитики и визуализации прогресса.',
  salesSpecificTitle: 'Инструменты для продаж',
  salesSpecificDesc: 'Получите доступ к упражнениям, разработанным специально для профессионалов продаж.',
  
  // Stats
  coreSkills: 'Основных ментальных навыков',
  interactiveDrills: 'Интерактивных упражнений',
  averageSession: 'Средняя сессия',
  
  // Footer
  footerTagline: 'Расширяем возможности профессионалов продаж с помощью инструментов ментального здоровья для достижения пиковой производительности.',
  
  // Assessment
  assessmentTitle: 'Оценка SalesMind',
  questionOf: 'Вопрос {current} из {total}',
  progressLabel: 'Прогресс',
  completeAssessment: 'Завершить оценку',
  
  // Dashboard
  welcomeBack: 'С возвращением, {name}! 👋',
  readyToBoost: 'Готовы повысить свою эффективность продаж с помощью целенаправленной ментальной подготовки?',
  overallScore: 'Общий балл',
  drillsCompleted: 'Упражнений выполнено',
  currentStreak: 'Текущая серия',
  timeInvested: 'Время вложено',
  consecutiveDays: 'Дней подряд',
  thisWeek: 'На этой неделе',
  priorityFocusArea: 'Приоритетная область фокуса',
  recommendedBased: 'На основе вашей оценки мы рекомендуем сначала сосредоточиться на этом навыке',
  recommended: 'Рекомендуется',
  startTraining: 'Начать тренировку',
  allMentalSkills: 'Все ментальные навыки',
  skillsAvailable: '{count} навыков доступно',
  exercises: 'упражнений',
  recentActivity: 'Недавняя активность',
  justCompleted: 'Только что завершено',
  
  // Skills
  currentProgress: 'Текущий прогресс',
  basedOn: 'Основано на:',
  trainingExercises: 'Тренировочные упражнения',
  exercisesAvailable: '{count} упражнений доступно',
  startExercise: 'Начать упражнение',
  completed: 'Завершено',
  
  // Progress
  myProgress: 'Мой прогресс',
  totalCompleted: 'Всего завершено',
  allTimeDrills: 'Упражнений за всё время',
  weeklyGoal: 'Недельная цель',
  weeklyActivity: 'Недельная активность',
  dailyDrillCompletions: 'Ваши ежедневные завершения упражнений на этой неделе',
  skillImprovements: 'Улучшения навыков',
  pointIncreases: 'Увеличение баллов по областям навыков',
  recentActivities: 'Недавняя активность',
  latestCompleted: 'Ваши последние завершенные упражнения',
  
  // Skill Names
  emotionalResilience: 'Эмоциональная устойчивость к отказам',
  energyFocus: 'Управление энергией и фокусом',
  confidenceBuilding: 'Построение уверенности',
  stressManagement: 'Управление стрессом и тревогой',
  motivation: 'Мотивация и постановка целей',
  communication: 'Навыки коммуникации',
  timeManagement: 'Управление временем и продуктивность',
  relationshipBuilding: 'Построение отношений',
  adaptability: 'Адаптивность и управление изменениями',
  problemSolving: 'Творческое решение проблем',
  flexibleThinking: 'Гибкое мышление',
  empathyListening: 'Эмпатия и активное слушание',
  anxietyManagement: 'Работа с тревогой перед звонками',

  // Skill Descriptions
  emotionalResilienceDesc: 'Развивайте ментальную стойкость, чтобы быстро восстанавливаться после отказов и поддерживать мотивацию.',
  energyFocusDesc: 'Оптимизируйте свою ментальную энергию и поддерживайте острый фокус в течение долгих рабочих дней.',
  confidenceBuildingDesc: 'Развивайте непоколебимую уверенность в себе и позитивный внутренний диалог для успеха в продажах.',
  stressManagementDesc: 'Изучите проверенные техники управления стрессом и тревогой в ситуациях высокого давления.',
  motivationDesc: 'Ставьте значимые цели и поддерживайте высокий уровень мотивации для устойчивой производительности.',
  communicationDesc: 'Улучшите свою вербальную и невербальную коммуникацию для лучших связей с клиентами.',
  timeManagementDesc: 'Оптимизируйте свой график и повысьте продуктивность с помощью проверенных стратегий управления временем.',
  relationshipBuildingDesc: 'Развивайте аутентичные, долгосрочные отношения с клиентами и коллегами.',
  adaptabilityDesc: 'Развивайте гибкость и устойчивость для процветания в изменяющейся бизнес-среде.',
  problemSolvingDesc: 'Улучшите свою способность находить инновационные решения сложных задач продаж.',
  flexibleThinkingDesc: 'Преодолевайте жесткие паттерны мышления и избегайте застревания в одних сценариях.',
  empathyListeningDesc: 'Создавайте доверие и улучшайте конверсию встреч через глубокое понимание.',
  anxietyManagementDesc: 'Сокращать избегающее поведение и поощрять раннее обращение за помощью.',


  // Drill Names and Descriptions
  abcCardAnalysis: 'Анализ ABC-карты',
  abcCardDesc: 'Выявляйте и оспаривайте негативные паттерны мышления после отказов',
  ninetySecondReset: '90-секундная перезагрузка',
  ninetySecondResetDesc: 'Быстрое дыхательное упражнение для сброса эмоционального состояния',
  threeKindFacts: 'Три добрых факта',
  threeKindFactsDesc: 'Практикуйте самосострадание, перечисляя позитивные истины о себе',
  roleplayDialogue: 'Ролевая игра с ИИ-клиентом',
  roleplayDialogueDesc: 'Практикуйте достижение трех отражений за две минуты с ИИ-клиентом',
  summary30: 'Вызов "Резюме-30"',
  summary30Desc: 'Резюмируйте основные моменты разговора за тридцать секунд',
  emotionalLabeling: 'Практика эмоциональной маркировки',
  emotionalLabelingDesc: 'Определяйте и маркируйте эмоции в сценариях с клиентами',
  threeAlternatives: 'Три альтернативы возражениям',
  threeAlternativesDesc: 'Разработайте три креативных ответа на общие ценовые возражения',
  whatIfScenarios: 'Карты сценариев "Что если..."',
  whatIfScenariosDesc: 'Практикуйте адаптацию подхода при неожиданных изменениях контекста',
  perspectiveReframe: 'Переосмысление перспективы',
  perspectiveReframeDesc: 'Оспаривайте жесткое мышление, исследуя множественные точки зрения',
  microExposure: 'Микровоздействие',
  microExposureDesc: 'Мысленно прорепетируйте первые 20 секунд звонка три раза',
  woopExercise: 'УПП Упражнение',
  woopExerciseDesc: 'Запланируйте свой первый звонок дня методом УПП',

  // Drill UI Elements
  getStarted: 'Начать',
  instructions: 'Инструкции',
  tips: 'Советы',
  guidance: 'Руководство',
  yourResponse: 'Ваш ответ',
  currentStep: 'Текущий шаг',
  stepOf: 'Шаг {current} из {total}',
  wellDone: 'Отлично!',
  excellent: 'Превосходно!',
  greatWork: 'Отличная работа!',
  // completed: 'Завершено',
  continue: 'Продолжить',
  finish: 'Завершить',
  reset: 'Сброс',
  pause: 'Пауза',
  resume: 'Возобновить',
  
  // ABC Card Drill
  abcCardTitle: 'Анализ ABC-карты',
  activatingEvent: 'А - Активирующее событие',
  activatingEventDesc: 'Опишите конкретную ситуацию, которая вызвала вашу эмоциональную реакцию. Будьте объективны и фактичны.',
  activatingEventPlaceholder: 'Пример: Клиент сказал "нет" моему предложению после 30-минутной презентации...',
  activatingEventTip: 'Сосредоточьтесь на фактах, а не на интерпретациях. Что на самом деле произошло?',
  beliefs: 'Б - Убеждения',
  beliefsDesc: 'Какие мысли или убеждения прошли через ваш разум об этом событии?',
  beliefsPlaceholder: 'Пример: Я подумал "Я ужасен в продажах, они, вероятно, думают, что я некомпетентен..."',
  beliefsTip: 'Будьте честны в отношении своих автоматических мыслей, даже если они кажутся иррациональными.',
  consequences: 'В - Последствия',
  consequencesDesc: 'Как вы себя чувствовали эмоционально и что делали в результате?',
  consequencesPlaceholder: 'Пример: Я чувствовал себя обескураженным и тревожным. Я избегал звонков до конца дня...',
  consequencesTip: 'Включите как эмоциональные чувства, так и поведенческие реакции.',
  dispute: 'Г - Оспаривание',
  disputeDesc: 'Оспорьте свои убеждения. Какие доказательства противоречат вашим негативным мыслям?',
  disputePlaceholder: 'Пример: Один отказ не определяет мои способности. У меня были успешные продажи раньше...',
  disputeTip: 'Ищите доказательства, которые противоречат вашим негативным убеждениям. Будьте своим собственным адвокатом.',
  completeAnalysis: 'Завершить анализ',
  nextStep: 'Следующий шаг',
  abcCompleteMessage: 'Вы завершили ABC-анализ. Эта техника когнитивной реструктуризации помогает строить устойчивость, оспаривая негативные паттерны мышления.',
  abcProTip: 'Практикуйте эту технику регулярно, особенно после сложных взаимодействий. Со временем вы автоматически будете подвергать сомнению негативные мысли, прежде чем они повлияют на ваши эмоции.',
  
  // Breathing Timer Drill
  breathingTitle: '90-секундная перезагрузка',
  breathingSubtitle: 'Дыхательный паттерн 4-7-8 для эмоциональной перезагрузки',
  getComfortable: 'Устройтесь поудобнее и приготовьтесь начать',
  breatheInSlowly: 'Медленно вдыхайте через нос',
  holdBreathGently: 'Мягко задержите дыхание',
  breatheOutSlowly: 'Медленно выдыхайте через рот',
  breathingCycles: 'Дыхательные циклы',
  focusTime: 'Время фокуса',
  breathingCompleteMessage: 'Вы завершили 90-секундное дыхательное упражнение для перезагрузки. Эта техника помогает активировать парасимпатическую нервную систему и сбросить эмоциональное состояние.',
  breathingInstructions: 'Инструкции дыхания 4-7-8:',
  inhaleInstruction: 'Вдыхайте через нос в течение 4 секунд',
  holdInstruction: 'Задержите дыхание на 7 секунд',
  exhaleInstruction: 'Выдыхайте через рот в течение 8 секунд',
  breathingTip: 'Эта техника помогает активировать реакцию расслабления вашего тела и сбросить эмоциональное состояние после сложных взаимодействий.',
  
  // Three Facts Drill
  threeFactsTitle: 'Три добрых факта',
  threeFactsSubtitle: 'Упражнение самосострадания для построения устойчивости',
  listThreeKindFacts: 'Перечислите три добрых факта о себе',
  kindFactsDesc: 'Подумайте о трех позитивных, правдивых утверждениях о себе. Это должны быть факты, а не мнения - то, что вы знаете как истину о своем характере, способностях или усилиях.',
  kindFactsTip: 'Сосредоточьтесь на фактах о ваших усилиях, росте, отношениях или позитивном влиянии. Например: "Я всегда внимательно слушаю своих клиентов" или "Я улучшил свои навыки презентации в этом году."',
  kindFact: 'Добрый факт',
  kindFactPlaceholder1: 'Я тот, кто...',
  kindFactPlaceholder2: 'У меня есть способность...',
  kindFactPlaceholder3: 'Я постоянно...',
  exampleKindFacts: 'Примеры добрых фактов:',
  kindFactExample1: 'Я искренне забочусь о том, чтобы помочь клиентам найти решения',
  kindFactExample2: 'Я восстанавливаюсь после неудач и продолжаю пытаться',
  kindFactExample3: 'Я построил значимые отношения с коллегами',
  kindFactExample4: 'Я всегда работаю над улучшением своих навыков',
  kindFactExample5: 'Я веду сложные разговоры профессионально',
  yourThreeKindFacts: 'Ваши три добрых факта:',
  threeFactsCompleteMessage: 'Вы практиковали самосострадание, признавая свои положительные качества. Это помогает строить устойчивость и эмоциональную силу.',
  threeFactsProTip: 'Возвращайтесь к этим фактам при столкновении с вызовами. Самосострадание - мощный инструмент для поддержания уверенности и устойчивости в продажах.',
  
  // Common Drill Elements
  duration: 'Продолжительность',
  minutes: 'минут',
  seconds: 'секунд',
  timeRemaining: 'Осталось времени',
  timeUsed: 'Использовано времени',
  score: 'Балл',
  accuracy: 'Точность',
  scenarios: 'Сценарии',
  reflections: 'Отражения',
  alternatives: 'Альтернативы',
  adaptations: 'Адаптации',
  
  // Assessment Questions
  assessmentQuestions: {
    emotionalResilience1: 'Как быстро вы восстанавливаетесь после отказа клиента?',
    emotionalResilience2: 'Когда сталкиваетесь с повторными "нет", как вы себя чувствуете?',
    emotionalResilience3: 'Как вы справляетесь с критикой вашего подхода к продажам?',
    energyFocus1: 'Как часто вы чувствуете ментальное истощение в течение рабочего дня?',
    energyFocus2: 'Насколько хорошо вы можете концентрироваться во время важных звонков?',
    energyFocus3: 'Как вы поддерживаете энергию в течение долгих рабочих дней?',
    confidence1: 'Насколько уверенно вы себя чувствуете при обращении к новым потенциальным клиентам?',
    confidence2: 'Как вы оцениваете свои способности в продажах?',
    stress1: 'Как вы справляетесь с ситуациями высокого давления в продажах?',
    stress2: 'Как часто вы испытываете тревогу, связанную с продажами?',
    motivation1: 'Насколько вы мотивированы достигать своих целей продаж?',
    motivation2: 'Насколько четко вы представляете свои карьерные цели?',
    communication1: 'Насколько комфортно вам ведение сложных разговоров?',
    communication2: 'Насколько хорошо вы слушаете потребности клиентов?',
    timeManagement1: 'Насколько хорошо вы расставляете приоритеты в ежедневных задачах?',
    timeManagement2: 'Как часто вы соблюдаете свои дедлайны?',
    relationships1: 'Насколько легко вы устанавливаете контакт с новыми клиентами?',
    relationships2: 'Насколько хорошо вы поддерживаете долгосрочные отношения с клиентами?',
    adaptability1: 'Насколько хорошо вы адаптируетесь к изменяющимся рыночным условиям?',
    adaptability2: 'Как вы справляетесь с неожиданными изменениями в процессе продаж?',
    problemSolving1: 'Как вы подходите к сложным проблемам клиентов?',
    problemSolving2: 'Насколько вы уверены в поиске креативных решений?',
    empathy1: 'Насколько хорошо вы понимаете скрытые заботы ваших клиентов?',
    empathy2: 'Как часто вы отражаете то, что говорят клиенты?',
    empathy3: 'Насколько вам комфортно вести эмоциональные разговоры?',
    anxiety1: 'Как часто вы откладываете важные звонки из-за тревоги?',
    anxiety2: 'Насколько комфортно вы себя чувствуете перед холодными звонками?',
    anxiety3: 'Как вы справляетесь с ожиданием трудных разговоров?'
  },

  // Assessment Options
  assessmentOptions: {
    emotionalResilience1: ["Немедленно", "В течение часа", "На следующий день", "Через несколько дней"],
    emotionalResilience2: ["Мотивирован улучшаться", "Слегка обескуражен", "Очень расстроен", "Хочу бросить"],
    emotionalResilience3: ["Использую для улучшения", "Принимаю близко к сердцу, но восстанавливаюсь", "Защищаюсь", "Избегаю обратной связи"],
    energyFocus1: ["Редко", "Иногда", "Часто", "Почти всегда"],
    energyFocus2: ["Полностью сосредоточен", "В основном сосредоточен", "Иногда отвлекаюсь", "Часто отвлекаюсь"],
    energyFocus3: ["Естественно высокая энергия", "Делаю стратегические перерывы", "Преодолеваю усталость", "Борюсь с усталостью"],
    confidence1: ["Очень уверен", "Довольно уверен", "Нервничаю, но справляюсь", "Очень тревожусь"],
    confidence2: ["Сильный и улучшающийся", "Хороший с возможностью роста", "Адекватный, но сомневающийся", "Не хватает уверенности"],
    stress1: ["Процветаю под давлением", "Хорошо справляюсь", "Немного тревожусь", "Чувствую себя подавленным"],
    stress2: ["Никогда", "Редко", "Иногда", "Часто"],
    motivation1: ["Крайне мотивирован", "Очень мотивирован", "Довольно мотивирован", "Борюсь с мотивацией"],
    motivation2: ["Очень четкий путь", "В целом ясно", "Несколько неясно", "Очень неясно"],
    communication1: ["Очень комфортно", "В основном комфортно", "Несколько некомфортно", "Очень некомфортно"],
    communication2: ["Отличный слушатель", "Хороший слушатель", "Средний слушатель", "Нужно улучшение"],
    timeManagement1: ["Очень организован", "В основном организован", "Несколько разбросан", "Очень неорганизован"],
    timeManagement2: ["Всегда", "Обычно", "Иногда", "Редко"],
    relationships1: ["Очень легко", "Довольно легко", "С некоторыми усилиями", "С большим трудом"],
    relationships2: ["Отлично", "Хорошо", "Удовлетворительно", "Плохо"],
    adaptability1: ["Очень адаптивный", "В основном адаптивный", "Несколько жесткий", "Очень жесткий"],
    adaptability2: ["Принимаю изменения", "Быстро адаптируюсь", "Нужно время для адаптации", "Сопротивляюсь изменениям"],
    problemSolving1: ["Систематический подход", "Интуитивное решение проблем", "Прошу помощи", "Чувствую себя подавленным"],
    problemSolving2: ["Очень уверен", "Довольно уверен", "Не очень уверен", "Не хватает уверенности"],
    empathy1: ["Всегда улавливаю эмоции", "Обычно понимаю заботы", "Иногда упускаю сигналы", "Часто неправильно понимаю потребности"],
    empathy2: ["Всегда перефразирую", "Часто отражаю", "Иногда резюмирую", "Редко отражаю обратно"],
    empathy3: ["Очень комфортно", "В основном комфортно", "Несколько некомфортно", "Очень некомфортно"]
  }
};

const translations = { en, ru };

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ru');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ru' : 'en');
  };

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (!value) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    
    // Replace parameters in the translation
    return Object.keys(params).reduce((str, param) => {
      return str.replace(`{${param}}`, params[param]);
    }, value);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}