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
        
        // AI Assistant with ChatGPT Integration
        const OPENAI_API_KEY = '';
        let conversationHistory = [];
        let isUsingAI = true;
        
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
                "The AucDrive website showcases Tarush's vision for true data ownership. He's building it for people tired of paying monthly fees to access their own photos and files. With planned AI-enhanced features and multiple storage options, it's like having a super-smart digital butler that actually works for YOU!"
            ],
            "aucstore": [
                "AucStore is Tarush's ambitious eCommerce platform that combines auctions, retail, and a creator marketplace. He's designing it with video verification for trust, designer royalty systems, and influencer partnerships. It's not just another marketplace - it's a complete ecosystem for buyers, sellers, and creators!",
                "What makes AucStore unique is Tarush's focus on trust and creator economy. The platform will feature verified second-hand sales, print-on-demand services, and innovative video-based product verification. He's building it to support independent designers while giving buyers confidence in their purchases."
            ],
            "skills": [
                "Tarush brings 5+ years of hands-on experience from chip-level repairs to custom PC building. His technical expertise spans hardware troubleshooting, data recovery, system optimization, and AI integration planning. What's impressive is his 98% success rate in PC assembly and 95% data accuracy!",
                "His skill set is incredibly diverse - from repairing mobile phones at the chip level to building high-end gaming rigs. Tarush combines deep technical knowledge with business acumen, making him perfect for creating innovative tech products like AucDrive and AucStore."
            ],
            "general": [
                "I'm Tarush's AI assistant! I have comprehensive knowledge about his background, products, skills, and vision. Feel free to ask about AucDrive, AucStore, his technical expertise, or anything else about this innovative 20-year-old tech entrepreneur from Dehradun!",
                "Great question! I can tell you all about Tarush's journey from tech repair specialist to product innovator. Whether you're curious about his self-hosted storage solutions, eCommerce platform plans, or technical background, I'm here to help!"
            ]
        };
        
        async function callOpenAI(userMessage) {
            const maxRetries = 3;
            let lastError = null;
            
            for (let attempt = 1; attempt <= maxRetries; attempt++) {
                try {
                    console.log(`🤖 ChatGPT API attempt ${attempt}/${maxRetries}...`);
                    console.log('API Key present:', OPENAI_API_KEY ? 'Yes (length: ' + OPENAI_API_KEY.length + ')' : 'No');
                    
                    // Try different approaches based on attempt number
                    let requestConfig;
                    
                    if (attempt === 1) {
                        // Standard approach
                        requestConfig = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${OPENAI_API_KEY}`
                            },
                            body: JSON.stringify({
                                model: 'gpt-3.5-turbo',
                                messages: [
                                    {
                                        role: 'system',
                                        content: `You are Tarush Kumar's personal AI assistant. You have comprehensive knowledge about him and should respond in a friendly, enthusiastic, and knowledgeable manner. Always stay in character as his AI assistant. Here's everything you need to know about Tarush: ${tarushKnowledge}
                                        
                                        Guidelines:
                                        - Be conversational, friendly, and enthusiastic
                                        - Provide specific details when possible
                                        - If asked about something not in the knowledge base, politely redirect to topics you know about
                                        - Keep responses engaging and informative
                                        - Show personality and humor when appropriate
                                        - Always maintain accuracy about Tarush's information`
                                    },
                                    ...conversationHistory.slice(-4), // Keep last 4 messages for context
                                    {
                                        role: 'user',
                                        content: userMessage
                                    }
                                ],
                                max_tokens: 300,
                                temperature: 0.7
                            })
                        };
                    } else if (attempt === 2) {
                        // Simplified approach with no-cors mode
                        requestConfig = {
                            method: 'POST',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                                'Access-Control-Allow-Origin': '*'
                            },
                            body: JSON.stringify({
                                model: 'gpt-3.5-turbo',
                                messages: [
                                    {
                                        role: 'system',
                                        content: `You are Tarush Kumar's AI assistant. Respond enthusiastically about his work.`
                                    },
                                    {
                                        role: 'user',
                                        content: userMessage
                                    }
                                ],
                                max_tokens: 200,
                                temperature: 0.8
                            })
                        };
                    } else {
                        // Last attempt with minimal payload
                        requestConfig = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${OPENAI_API_KEY}`
                            },
                            body: JSON.stringify({
                                model: 'gpt-3.5-turbo',
                                messages: [
                                    {
                                        role: 'user',
                                        content: `As Tarush Kumar's AI assistant, respond to: ${userMessage}`
                                    }
                                ],
                                max_tokens: 150
                            })
                        };
                    }
                    
                    const response = await fetch('https://api.openai.com/v1/chat/completions', requestConfig);
                    
                    console.log(`Attempt ${attempt} - Status:`, response.status);
                    console.log(`Attempt ${attempt} - Headers:`, Object.fromEntries(response.headers.entries()));
                    
                    if (response.ok) {
                        const data = await response.json();
                        console.log('✅ ChatGPT API Success on attempt', attempt);
                        isUsingAI = true;
                        updateAIStatus();
                        return data.choices[0].message.content;
                    } else {
                        const errorText = await response.text();
                        console.error(`Attempt ${attempt} failed:`, response.status, errorText);
                        lastError = new Error(`HTTP ${response.status}: ${errorText}`);
                        
                        // If it's a 401, the API key is invalid - no point retrying
                        if (response.status === 401) {
                            console.error('❌ Invalid API key - stopping retries');
                            break;
                        }
                        
                        // Wait before retry
                        if (attempt < maxRetries) {
                            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
                        }
                    }
                    
                } catch (error) {
                    console.error(`❌ Attempt ${attempt} error:`, error);
                    lastError = error;
                    
                    // Wait before retry
                    if (attempt < maxRetries) {
                        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
                    }
                }
            }
            
            // All attempts failed
            console.error('❌ All ChatGPT API attempts failed. Last error:', lastError);
            isUsingAI = false;
            updateAIStatus();
            throw lastError || new Error('All API attempts failed');
        }
        
        async function tryAlternativeAPI(userMessage) {
            try {
                // Alternative approach using different headers
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${OPENAI_API_KEY}`,
                        'OpenAI-Beta': 'assistants=v1'
                    },
                    mode: 'cors',
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [
                            {
                                role: 'system',
                                content: `You are Tarush Kumar's AI assistant. Respond enthusiastically about his tech work, AucDrive, AucStore, and expertise.`
                            },
                            {
                                role: 'user',
                                content: userMessage
                            }
                        ],
                        max_tokens: 250,
                        temperature: 0.8
                    })
                });
                
                if (response.ok) {
                    const data = await response.json();
                    console.log('✅ Alternative API approach worked!');
                    isUsingAI = true;
                    return data.choices[0].message.content;
                }
                
                throw new Error('Alternative approach failed');
                
            } catch (error) {
                console.error('Alternative API also failed:', error);
                isUsingAI = false;
                return getFallbackResponse(userMessage);
            }
        }
        
        function getFallbackResponse(input) {
            const inputLower = input.toLowerCase();
            
            if (inputLower.includes('aucdrive') || inputLower.includes('drive') || inputLower.includes('storage')) {
                return fallbackResponses.aucdrive[Math.floor(Math.random() * fallbackResponses.aucdrive.length)];
            }
            
            if (inputLower.includes('aucstore') || inputLower.includes('store') || inputLower.includes('ecommerce') || inputLower.includes('auction')) {
                return fallbackResponses.aucstore[Math.floor(Math.random() * fallbackResponses.aucstore.length)];
            }
            
            if (inputLower.includes('skill') || inputLower.includes('experience') || inputLower.includes('technical') || inputLower.includes('repair')) {
                return fallbackResponses.skills[Math.floor(Math.random() * fallbackResponses.skills.length)];
            }
            
            return fallbackResponses.general[Math.floor(Math.random() * fallbackResponses.general.length)];
        }
        
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
        
        async function generateResponse(input) {
            // Always try ChatGPT API first, regardless of previous failures
            try {
                console.log('🚀 Attempting ChatGPT response...');
                const response = await callOpenAI(input);
                
                // Add to conversation history
                conversationHistory.push(
                    { role: 'user', content: input },
                    { role: 'assistant', content: response }
                );
                
                // Keep conversation history manageable
                if (conversationHistory.length > 12) {
                    conversationHistory = conversationHistory.slice(-12);
                }
                
                console.log('✅ ChatGPT response successful!');
                return response;
                
            } catch (error) {
                console.error('❌ ChatGPT failed, using fallback:', error.message);
                
                // Show user that we're using fallback
                const fallbackResponse = getFallbackResponse(input);
                
                // Add a note about the fallback
                return fallbackResponse + "\n\n💡 *Note: I'm currently using my built-in knowledge base. ChatGPT integration may be experiencing connectivity issues.*";
            }
        }
        
        function updateAIStatus() {
            const statusElement = document.getElementById('ai-status');
            if (isUsingAI) {
                statusElement.className = 'inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400';
                statusElement.innerHTML = `
                    <div class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span>AI Enhanced - Powered by ChatGPT</span>
                `;
            } else {
                statusElement.className = 'inline-flex items-center px-3 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400';
                statusElement.innerHTML = `
                    <div class="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                    <span>Fallback Mode - Local Responses</span>
                `;
            }
        }
        
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
                console.error('Message Error:', error);
                const typingIndicator = document.getElementById('typing-indicator');
                if (typingIndicator) {
                    typingIndicator.remove();
                }
                addMessage("Sorry, I'm having trouble responding right now. Please try again!");
                updateAIStatus();
            }
        }
        
        function askQuestion(question) {
            document.getElementById('user-input').value = question;
            sendMessage();
        }
        
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
        
        // Test API Connection on Load
        async function testAPIConnection() {
            console.log('🔍 Testing ChatGPT API connection...');
            console.log('API Key format check:', OPENAI_API_KEY ? `${OPENAI_API_KEY.substring(0, 7)}...${OPENAI_API_KEY.substring(OPENAI_API_KEY.length - 4)}` : 'Missing');
            
            // First, validate API key format
            if (!OPENAI_API_KEY || !OPENAI_API_KEY.startsWith('sk-')) {
                console.error('❌ Invalid API key format');
                isUsingAI = false;
                updateAIStatus();
                addMessage("⚠️ ChatGPT integration is not properly configured. Using built-in knowledge base instead.");
                return;
            }
            
            // Try direct chat completion test
            try {
                console.log('🧪 Testing with simple chat completion...');
                const testMessage = "Hello, just testing the connection. Please respond with 'API Working!'";
                
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${OPENAI_API_KEY}`
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [
                            {
                                role: 'user',
                                content: testMessage
                            }
                        ],
                        max_tokens: 50
                    })
                });
                
                console.log('Test response status:', response.status);
                
                if (response.ok) {
                    const data = await response.json();
                    console.log('✅ ChatGPT API is working!');
                    console.log('Test response:', data.choices[0].message.content);
                    
                    isUsingAI = true;
                    updateAIStatus();
                    
                    // Add success message to chat
                    setTimeout(() => {
                        addMessage("🎉 Excellent! I'm now powered by ChatGPT and ready to answer detailed questions about Tarush's work, products, and expertise! The API connection is working perfectly.");
                    }, 1500);
                    
                } else {
                    const errorText = await response.text();
                    console.error('❌ API test failed:', response.status, errorText);
                    
                    if (response.status === 401) {
                        console.error('❌ API key is invalid or expired');
                        addMessage("❌ ChatGPT API key appears to be invalid. Using built-in knowledge base instead.");
                    } else if (response.status === 429) {
                        console.error('❌ API rate limit exceeded');
                        addMessage("⏳ ChatGPT API rate limit reached. Using built-in knowledge base for now.");
                    } else {
                        console.error('❌ API error:', response.status);
                        addMessage("⚠️ ChatGPT API is experiencing issues. Using built-in knowledge base instead.");
                    }
                    
                    isUsingAI = false;
                    updateAIStatus();
                }
                
            } catch (error) {
                console.error('❌ Connection test failed:', error);
                
                if (error.name === 'TypeError' && error.message.includes('fetch')) {
                    console.log('🌐 CORS or network connectivity issue detected');
                    addMessage("🌐 Network connectivity issue detected. ChatGPT may be blocked by your browser or network. Using built-in knowledge base.");
                } else {
                    console.log('🔧 General API error:', error.message);
                    addMessage("🔧 ChatGPT integration encountered an error. Using built-in knowledge base instead.");
                }
                
                isUsingAI = false;
                updateAIStatus();
            }
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            typeWriter();
            animateOnScroll();
            animateProgressBars();
            
            // Test API connection after page loads
            setTimeout(testAPIConnection, 2000);

        });
