// Particles Animation
function createParticles() {
    const particles = document.querySelector('.particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = particle.style.height = Math.random() * 10 + 5 + 'px';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particles.appendChild(particle);
    }
}

// Typing Animation
const phrases = [
    "Tech Entrepreneur & Product Innovator",
    "Creator of AucDrive & AucStore",
    "Electronics & PC Building Expert",
    "Privacy-First Solution Builder",
    "AI Integration Specialist"
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function typeWriter() {
    const typingElement = document.getElementById('typing-text');
    const current = phrases[currentPhrase];

    if (isDeleting) {
        typingElement.textContent = current.substring(0, currentChar - 1);
        currentChar--;
    } else {
        typingElement.textContent = current.substring(0, currentChar + 1);
        currentChar++;
    }

    if (!isDeleting && currentChar === current.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, speed);
}

// Scroll Animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Progress Bar Animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');

    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        const barTop = bar.getBoundingClientRect().top;

        if (barTop < window.innerHeight - 100) {
            bar.style.width = width + '%';
        }
    });
}

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.add('translate-x-full');
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// --- Simple Knowledge-Base Chatbot ---

// Comprehensive knowledge base about Tarush Kumar
const tarushKnowledge = `
ABOUT TARUSH KUMAR:
- Full Name: Tarush Kumar
- Age: 20 years old (Born January 9, 2004)
- Location: Dehradun, India
- Contact: Tarushkumar22@gmail.com, +91 83078 49339

BACKGROUND & EDUCATION:
- Studied at Mount Litera Zee School (2015-2021) - 12th Grade PCM
- Currently at Himalayan Institute studying B.Pharmacy (2021-2025) but transitioning to IT career
- Self-taught tech entrepreneur with 5+ years hands-on experience

PROFESSIONAL EXPERIENCE:
1. Tech Support & System Specialist at Xpert Communication (2019-2024)
   - 85% repair success rate
   - Expert in mobile & laptop repairs, custom PC building
   - Chip-level repairs and data recovery specialist
   - Excellent customer service record

2. Backend Executive & IT Support at QDIGI Services Ltd (Mar 2025 - Jul 2025)
   - 98% data accuracy maintained
   - Samsung GSPN portal management
   - Complex backend processes and IT support

3. Founder & Website Developer for AucDrive & AucStore Projects (2023-Present)
   - Product concept design and development
   - Website development and planning
   - AI-enhanced features integration
   - Privacy-first architecture design

PRODUCTS & INNOVATIONS:

1. AUCDRIVE (aucdrive.in):
- Self-hosted, Wi-Fi-connected smart storage solution
- Website currently in development showcasing the concept
- Key features: Smart theft protection, remote file access, direct downloads, zero subscriptions
- Vision: Personal cloud that truly belongs to the user, no Big Tech involvement
- Target: Families tired of monthly cloud storage fees
- Technology: Wi-Fi connectivity, multiple storage types (SSD/SD/HDD), AI-enhanced file management

2. AUCSTORE:
- Multi-purpose eCommerce platform in planning stage
- Combines verified auctions, retail listings, print-on-demand store
- Features: Verified second-hand sales, designer royalty system, influencer partnerships
- Innovation: Video-based product verification for trust
- Target: Creating trusted marketplace with creator economy support

TECHNICAL SKILLS:
- Hardware: Mobile & laptop repair (chip-level), custom PC building, data recovery
- Software: Windows, Android, Linux systems, system optimization
- Web Development: HTML, CSS, WordPress, UI/UX design
- Business: Backend management, product planning, social media marketing
- AI Integration: Planning AI-enhanced features for products
- Success Rates: 98% PC assembly, 95% data accuracy, 92% customer service, 78% problem solving

PERSONALITY & TRAITS:
- Tech entrepreneur with hands-on technical background
- Privacy-first advocate who believes in user-controlled technology
- Transitioned from skilled technician to visionary product creator
- Combines hardware expertise with software innovation
- Motivated by creating affordable, self-hosted solutions
- Young innovator building the future of personal technology

VISION & PHILOSOPHY:
- Creating AI-powered, privacy-first tech products
- Making technology affordable and truly user-controlled
- Blending hardware expertise with intelligent software features
- Building alternatives to Big Tech dependency
- Empowering users with self-hosted solutions

CURRENT STATUS:
- 20-year-old tech entrepreneur from Dehradun, India
- Building innovative products while completing education
- Focused on AucDrive and AucStore development
- Available for collaborations and tech discussions
- Single and focused on building his tech empire
`;

// Fallback responses for when API is unavailable
const fallbackResponses = {
    "aucdrive": [
        "AucDrive (aucdrive.in) is Tarush's revolutionary self-hosted storage solution! It's designed to give you complete control over your data - no monthly fees, no Big Tech spying, just your files, your way. The concept includes Wi-Fi connectivity, smart theft protection, and direct internet downloads. Think of it as your personal data fortress!",
        "The AucDrive website showcases Tarush's vision for true data ownership. He's building it for people tired of paying monthly fees to access their own photos and files. With planned AI-enhanced features and multiple storage options, it's like having a super-smart digital butler that actually works for YOU!",
        "AucDrive is a privacy-first, subscription-free smart storage device. It offers Wi-Fi connectivity, remote access, direct downloads, and smart theft protection. Perfect for families and small businesses who want their own personal cloud.",
        "AucDrive is currently in the concept stage. It aims to provide a secure, self-hosted alternative to cloud storage, with features like AI-powered file management and multiple storage types (SSD, SD, HDD).",
        "Bhai, AucDrive toh ekdum desi jugaad hai for your storage needs! No tension of monthly bills, just apna data, apne haath mein! 😄",
        "AucDrive is like your own digital locker, but smarter! Store your family photos, movies, and even your secret recipes – all safe and sound, Indian style!"
    ],
    "aucstore": [
        "AucStore is Tarush's ambitious eCommerce platform that combines auctions, retail, and a creator marketplace. He's designing it with video verification for trust, designer royalty systems, and influencer partnerships. It's not just another marketplace - it's a complete ecosystem for buyers, sellers, and creators!",
        "What makes AucStore unique is Tarush's focus on trust and creator economy. The platform will feature verified second-hand sales, print-on-demand services, and innovative video-based product verification. He's building it to support independent designers while giving buyers confidence in their purchases.",
        "AucStore is in the planning stage and will offer verified auctions, retail listings, and a print-on-demand store. It supports local vendors, designer royalties, and influencer partnerships.",
        "AucStore's innovation includes video-based product verification, ensuring trust for buyers and sellers. Revenue streams will include transaction fees, premium listings, and verified seller subscriptions.",
        "AucStore is like your friendly neighbourhood bazaar, but online! Verified sellers, cool products, and even a chance for local creators to shine. Kya baat hai! 😃",
        "Want to sell your old phone or buy a designer kurta? AucStore is coming soon – safe, secure, and full-on Indian vibes!"
    ],
    "skills": [
        "Tarush brings 5+ years of hands-on experience from chip-level repairs to custom PC building. His technical expertise spans hardware troubleshooting, data recovery, system optimization, and AI integration planning. What's impressive is his 98% success rate in PC assembly and 95% data accuracy!",
        "His skill set is incredibly diverse - from repairing mobile phones at the chip level to building high-end gaming rigs. Tarush combines deep technical knowledge with business acumen, making him perfect for creating innovative tech products like AucDrive and AucStore.",
        "Tarush is an expert in electronics repair, custom PC building, mobile and laptop repair, chip-level diagnostics, and data recovery. He also has experience in Windows, Android, Linux, and system optimization.",
        "He is skilled in web development (HTML, CSS, WordPress), UI/UX design, backend management, product planning, and social media marketing. He is also planning AI-enhanced features for his products.",
        "Bhai, Tarush ka haath lagte hi dead laptop bhi zinda ho jaata hai! 😆",
        "PC build karna ho ya mobile ka motherboard repair, Tarush is your go-to techie! Ekdum mast kaam karta hai, boss!"
    ],
    "experience": [
        "Tarush has worked as a Tech Support & System Specialist at Xpert Communication (2019-2024), achieving an 85% repair success rate and specializing in mobile/laptop repairs and custom PC building.",
        "He served as Backend Executive & IT Support at QDIGI Services Ltd (Mar 2025 - Jul 2025), maintaining 98% data accuracy and managing Samsung GSPN portal and complex backend processes.",
        "As the founder and website developer for AucDrive & AucStore (2023-Present), Tarush leads product concept design, website development, and privacy-first architecture planning.",
        "From repairing phones in Dehradun to launching his own tech products, Tarush's journey is total inspiration! 💪",
        "Tarush has handled everything from customer support to backend management – multitasking level: Indian mom! 😄"
    ],
    "education": [
        "Tarush studied at Mount Litera Zee School (2015-2021), completing 12th Grade PCM. He is currently at Himalayan Institute (2021-2025) studying B.Pharmacy, but is transitioning to an IT career.",
        "He is a self-taught tech entrepreneur with over 5 years of hands-on experience in electronics and product development.",
        "School se lekar startup tak, Tarush has always been a topper in tech! 📚",
        "B.Pharmacy padhte-padhte IT ka king ban gaya – that's Tarush for you!"
    ],
    "contact": [
        "You can contact Tarush Kumar at Tarushkumar22@gmail.com or call +91 83078 49339. He is based in Dehradun, India.",
        "For business inquiries, partnerships, or collaborations, email Tarush at Tarushkumar22@gmail.com or visit aucdrive.in.",
        "Kuch bhi poochna ho? Seedha message karo ya call maaro – Tarush is always happy to help! 😊"
    ],
    "vision": [
        "Tarush's vision is to create AI-powered, privacy-first tech products that are affordable, self-hosted, and truly user-controlled.",
        "He is motivated by building alternatives to Big Tech dependency and empowering users with self-hosted solutions.",
        "His goal is to blend hardware expertise with intelligent software features, making technology accessible and secure for everyone.",
        "Sapna hai ki har Indian apna data khud sambhale – safe, secure, aur bina monthly paisa diye! 🚀"
    ],
    "funny": [
        "Did you know? Tarush once fixed a laptop with a paperclip and a lot of optimism! True tech wizardry.",
        "Tarush's idea of a 'break' is fixing someone else's computer for fun. That's dedication!",
        "If you ask Tarush for a joke, he'll probably tell you a story about a stubborn motherboard.",
        "Tarush ka favourite tool? Screwdriver aur chai ki chuski! 😁",
        "When Tarush enters the room, even Wi-Fi signals get stronger. Magic or just tech skills? You decide! 😄"
    ],
    "relationship": [
        "Tarush is single and focused on building his tech empire!",
        "Currently, Tarush is not dating—he's busy innovating and creating new tech solutions.",
        "Single hai, but his relationship with technology is going strong! 💻❤️"
    ],
    "goals": [
        "Tarush is driven by a passion for privacy-first technology and making smart solutions accessible to everyone.",
        "His main goal is to empower users with self-hosted, AI-enhanced products like AucDrive and AucStore.",
        "Goal simple hai: India ko digital duniya mein aage le jaana, apne dum par! 🇮🇳"
    ],
    "location": [
        "Tarush Kumar is based in Dehradun, Uttarakhand, India.",
        "He is open to global partnerships and collaborations.",
        "Dehradun ki thandi hawa aur Tarush ka garam tech passion – kya combo hai! 😃"
    ],
    "general": [
        "I'm Tarush's assistant! I have comprehensive knowledge about his background, products, skills, and vision. Feel free to ask about AucDrive, AucStore, his technical expertise, or anything else about this innovative 20-year-old tech entrepreneur from Dehradun!",
        "Great question! I can tell you all about Tarush's journey from tech repair specialist to product innovator. Whether you're curious about his self-hosted storage solutions, eCommerce platform plans, or technical background, I'm here to help!",
        "Ask me about Tarush's experience, education, skills, projects, or how to contact him. I'm here to help you learn more about his work and vision.",
        "Tarush is a privacy-first advocate, tech entrepreneur, and product innovator. Ask about his projects, skills, or how he can help your business!",
        "Namaste! Tarush ke baare mein kuch bhi poochho – main hoon na, bataane ke liye! 😊",
        "Aapko Tarush ki journey, skills, ya products ke baare mein jaana hai? Bas pooch lijiye, main sab bataunga – ekdum mast mood mein! 😄"
    ]
};

function getFallbackResponse(input) {
    const inputLower = input.toLowerCase();

    // AucDrive
    if (
        inputLower.includes('aucdrive') ||
        inputLower.includes('drive') ||
        inputLower.includes('storage') ||
        inputLower.includes('personal cloud') ||
        inputLower.includes('cloud device') ||
        inputLower.includes('smart storage') ||
        inputLower.includes('wifi storage') ||
        inputLower.includes('data protection') ||
        inputLower.includes('file access')
    ) {
        return fallbackResponses.aucdrive[Math.floor(Math.random() * fallbackResponses.aucdrive.length)];
    }

    // AucStore
    if (
        inputLower.includes('aucstore') ||
        inputLower.includes('store') ||
        inputLower.includes('ecommerce') ||
        inputLower.includes('auction') ||
        inputLower.includes('marketplace') ||
        inputLower.includes('sell') ||
        inputLower.includes('buy') ||
        inputLower.includes('shopping') ||
        inputLower.includes('bazaar') ||
        inputLower.includes('verified seller') ||
        inputLower.includes('print on demand')
    ) {
        return fallbackResponses.aucstore[Math.floor(Math.random() * fallbackResponses.aucstore.length)];
    }

    // Skills
    if (
        inputLower.includes('skill') ||
        inputLower.includes('expertise') ||
        inputLower.includes('technical') ||
        inputLower.includes('repair') ||
        inputLower.includes('pc building') ||
        inputLower.includes('web development') ||
        inputLower.includes('hardware') ||
        inputLower.includes('software') ||
        inputLower.includes('data recovery') ||
        inputLower.includes('mobile repair') ||
        inputLower.includes('laptop repair') ||
        inputLower.includes('coding') ||
        inputLower.includes('programming') ||
        inputLower.includes('ui') ||
        inputLower.includes('ux') ||
        inputLower.includes('design')
    ) {
        return fallbackResponses.skills[Math.floor(Math.random() * fallbackResponses.skills.length)];
    }

    // Experience
    if (
        inputLower.includes('experience') ||
        inputLower.includes('work') ||
        inputLower.includes('job') ||
        inputLower.includes('career') ||
        inputLower.includes('background') ||
        inputLower.includes('projects') ||
        inputLower.includes('internship') ||
        inputLower.includes('company') ||
        inputLower.includes('professional')
    ) {
        return fallbackResponses.experience[Math.floor(Math.random() * fallbackResponses.experience.length)];
    }

    // Education
    if (
        inputLower.includes('education') ||
        inputLower.includes('school') ||
        inputLower.includes('college') ||
        inputLower.includes('study') ||
        inputLower.includes('studied') ||
        inputLower.includes('degree') ||
        inputLower.includes('b.pharmacy') ||
        inputLower.includes('mount litera') ||
        inputLower.includes('himalayan institute') ||
        inputLower.includes('qualification')
    ) {
        return fallbackResponses.education[Math.floor(Math.random() * fallbackResponses.education.length)];
    }

    // Contact
    if (
        inputLower.includes('contact') ||
        inputLower.includes('email') ||
        inputLower.includes('phone') ||
        inputLower.includes('reach') ||
        inputLower.includes('connect') ||
        inputLower.includes('call') ||
        inputLower.includes('message') ||
        inputLower.includes('whatsapp')
    ) {
        return fallbackResponses.contact[Math.floor(Math.random() * fallbackResponses.contact.length)];
    }

    // Vision / Philosophy / Goals
    if (
        inputLower.includes('vision') ||
        inputLower.includes('philosophy') ||
        inputLower.includes('motivate') ||
        inputLower.includes('goal') ||
        inputLower.includes('dream') ||
        inputLower.includes('future') ||
        inputLower.includes('mission') ||
        inputLower.includes('purpose') ||
        inputLower.includes('plan')
    ) {
        return fallbackResponses.vision[Math.floor(Math.random() * fallbackResponses.vision.length)];
    }

    // Funny / Jokes / Fun
    if (
        inputLower.includes('funny') ||
        inputLower.includes('joke') ||
        inputLower.includes('humor') ||
        inputLower.includes('meme') ||
        inputLower.includes('laugh') ||
        inputLower.includes('timepass') ||
        inputLower.includes('bored')
    ) {
        return fallbackResponses.funny[Math.floor(Math.random() * fallbackResponses.funny.length)];
    }

    // Relationship / Personal Life
    if (
        inputLower.includes('single') ||
        inputLower.includes('dating') ||
        inputLower.includes('relationship') ||
        inputLower.includes('girlfriend') ||
        inputLower.includes('married') ||
        inputLower.includes('love life')
    ) {
        return fallbackResponses.relationship[Math.floor(Math.random() * fallbackResponses.relationship.length)];
    }

    // Goals (extra)
    if (
        inputLower.includes('goal') ||
        inputLower.includes('motivate') ||
        inputLower.includes('dream') ||
        inputLower.includes('target') ||
        inputLower.includes('ambition')
    ) {
        return fallbackResponses.goals[Math.floor(Math.random() * fallbackResponses.goals.length)];
    }

    // Location / City / Place
    if (
        inputLower.includes('location') ||
        inputLower.includes('where') ||
        inputLower.includes('based') ||
        inputLower.includes('city') ||
        inputLower.includes('dehradun') ||
        inputLower.includes('uttarakhand') ||
        inputLower.includes('india') ||
        inputLower.includes('country')
    ) {
        return fallbackResponses.location[Math.floor(Math.random() * fallbackResponses.location.length)];
    }

    // Default/general
    return fallbackResponses.general[Math.floor(Math.random() * fallbackResponses.general.length)];
}

// Add message to chat
function addMessage(message, isUser = false) {
    const chatContainer = document.getElementById('chat-container');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex items-start space-x-3';

    if (isUser) {
        messageDiv.innerHTML = `
            <div class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-sm">
                <i class="fas fa-user text-white"></i>
            </div>
            <div class="chat-bubble-user rounded-lg p-3 max-w-xs">
                <p class="text-sm">${message}</p>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm">
                <i class="fas fa-robot text-white"></i>
            </div>
            <div class="chat-bubble-ai rounded-lg p-3 max-w-md">
                <p class="text-sm">${message}</p>
            </div>
        `;
    }

    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Generate chatbot response
async function generateResponse(input) {
    return getFallbackResponse(input);
}

// Update AI status badge
function updateAIStatus() {
    const statusElement = document.getElementById('ai-status');
    statusElement.className = 'inline-flex items-center px-3 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400';
    statusElement.innerHTML = `
        <div class="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
        <span>Local Mode - Built-in Responses</span>
    `;
}

// Send user message and get response
async function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();

    if (!message) return;

    addMessage(message, true);
    input.value = '';

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'flex items-start space-x-3';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm">
            <i class="fas fa-robot text-white"></i>
        </div>
        <div class="chat-bubble-ai rounded-lg p-3 max-w-md">
            <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
        </div>
    `;

    const chatContainer = document.getElementById('chat-container');
    chatContainer.appendChild(typingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    try {
        const response = await generateResponse(message);

        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }

        addMessage(response);
        updateAIStatus();
    } catch (error) {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        addMessage("Sorry, I'm having trouble responding right now. Please try again!");
        updateAIStatus();
    }
}

// Quick question button
function askQuestion(question) {
    document.getElementById('user-input').value = question;
    sendMessage();
}

// Handle Enter key in chat input
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Event Listeners
document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);

window.addEventListener('scroll', () => {
    animateOnScroll();
    animateProgressBars();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    typeWriter();
    animateOnScroll();
    animateProgressBars();
    updateAIStatus();
    addMessage("💡 I'm ready! Ask me anything about Tarush Kumar, his products, skills, or vision.");

    // Investment form success message
    const investmentForm = document.querySelector('form[name="investment-inquiry"]');
    if (investmentForm) {
        investmentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            investmentForm.reset();
            investmentForm.innerHTML = `
                <div class="text-center py-12">
                    <div class="text-4xl mb-4 text-green-400"><i class="fas fa-check-circle"></i></div>
                    <h3 class="text-2xl font-bold mb-2">Successfully Submitted!</h3>
                    <p class="text-lg text-green-300">Thank you for your interest.<br>We will contact you as soon as possible.</p>
                </div>
            `;
        });
    }
});