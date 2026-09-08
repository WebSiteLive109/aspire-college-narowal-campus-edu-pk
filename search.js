// search.js - Search Engine for Aspire Colleges Website
class SearchEngine {
    constructor() {
        this.searchData = this.loadSearchData();
        this.init();
    }
    
    loadSearchData() {
        // Complete search data for Aspire Colleges website
        return [
            // Home & Main Pages
            {
                id: 1,
                title: "Home",
                description: "Welcome to Aspire Colleges Narrowal Campus - Premier educational institution",
                keywords: ["home", "main", "welcome", "college", "education", "aspire"],
                url: "index.html",
                type: "Main"
            },
            {
                id: 2,
                title: "About Aspire Colleges",
                description: "Learn about our legacy of excellence since 2005. Our mission, vision, and values.",
                keywords: ["about", "history", "mission", "vision", "values", "excellence", "legacy"],
                url: "about.html",
                type: "About"
            },
            
            // Programs
            {
                id: 3,
                title: "Pre-Medical Program (FSc)",
                description: "Comprehensive program for aspiring medical professionals with biology, chemistry, and physics.",
                keywords: ["pre-medical", "medical", "biology", "chemistry", "physics", "fsc", "doctor", "mbbs", "bds"],
                url: "programs.html#pre-medical",
                type: "Program"
            },
            {
                id: 4,
                title: "Pre-Engineering Program (FSc)",
                description: "Rigorous program focusing on mathematics, physics, and chemistry for engineering universities.",
                keywords: ["pre-engineering", "engineering", "math", "mathematics", "physics", "fsc", "engineer", "bsc"],
                url: "programs.html#pre-engineering",
                type: "Program"
            },
            {
                id: 5,
                title: "Computer Science (ICS)",
                description: "Modern curriculum covering programming, software development, and computer systems.",
                keywords: ["computer science", "programming", "software", "it", "ics", "technology", "cs"],
                url: "programs.html#computer-science",
                type: "Program"
            },
            
            // Admissions
            {
                id: 6,
                title: "Online Admission Form",
                description: "Apply online for admission to Aspire Colleges Narrowal. Submit your application online.",
                keywords: ["admission", "apply", "online", "form", "application", "enroll", "register"],
                url: "OnlineAdmissionformpages.html",
                type: "Admission"
            },
            {
                id: 7,
                title: "Admission Requirements",
                description: "Check the eligibility criteria and requirements for admission.",
                keywords: ["requirements", "eligibility", "criteria", "documents", "deadline", "qualification"],
                url: "admissions.html",
                type: "Admission"
            },
            {
                id: 8,
                title: "Scholarships & Financial Aid",
                description: "Information about scholarships and financial aid available for students.",
                keywords: ["scholarship", "financial aid", "fee concession", "merit", "need-based", "funding"],
                url: "admissions.html#scholarships",
                type: "Admission"
            },
            {
                id: 9,
                title: "Fee Structure",
                description: "Complete fee structure for all programs including admission fee and monthly tuition.",
                keywords: ["fee", "tuition", "charges", "payment", "cost", "expenses", "admission fee"],
                url: "admissions.html#fees",
                type: "Admission"
            },
            
            // Faculty & Campus
            {
                id: 10,
                title: "Faculty Members",
                description: "Meet our experienced and qualified faculty members at Aspire Colleges.",
                keywords: ["faculty", "teachers", "professors", "staff", "educators", "instructors"],
                url: "faculty.html",
                type: "Faculty"
            },
            {
                id: 11,
                title: "Campus Tour",
                description: "Explore our state-of-the-art campus facilities and infrastructure.",
                keywords: ["campus", "tour", "facilities", "infrastructure", "buildings", "labs", "library"],
                url: "campus.html",
                type: "Campus"
            },
            {
                id: 12,
                title: "Campus Location",
                description: "Find our location: College Road, Near Narrowal Bypass, Punjab, Pakistan.",
                keywords: ["location", "address", "map", "directions", "how to reach", "contact"],
                url: "campus.html#location",
                type: "Campus"
            },
            
            // Franchise
            {
                id: 13,
                title: "Franchise Program",
                description: "Join Aspire Colleges Franchise Program. Become a partner in educational excellence.",
                keywords: ["franchise", "business", "partner", "investment", "opportunity", "collaboration"],
                url: "franchiseprogram.html",
                type: "Business"
            },
            {
                id: 14,
                title: "Franchise Investment Plans",
                description: "Silver, Gold, and Platinum franchise packages with different investment levels.",
                keywords: ["investment", "plans", "packages", "silver", "gold", "platinum", "franchise fee"],
                url: "franchiseprogram.html#investment",
                type: "Business"
            },
            
            // Contact & Support
            {
                id: 15,
                title: "Contact Information",
                description: "Get in touch with Aspire Colleges Narrowal Campus. Find our address and contact details.",
                keywords: ["contact", "address", "phone", "email", "location", "map", "support"],
                url: "contact.html",
                type: "Contact"
            },
            {
                id: 16,
                title: "Phone & Email",
                description: "Contact numbers: +92 42 1234567 | Email: info@aspirecolleges.edu.pk",
                keywords: ["phone", "telephone", "mobile", "email", "whatsapp", "call", "message"],
                url: "contact.html#contact-info",
                type: "Contact"
            },
            {
                id: 17,
                title: "Visit Our Campus",
                description: "College Road, Near Narrowal Bypass, Punjab, Pakistan. Office hours: 8AM-4PM Mon-Fri",
                keywords: ["visit", "office", "hours", "timings", "working hours", "campus visit"],
                url: "contact.html#visit",
                type: "Contact"
            },
            
            // Academic
            {
                id: 18,
                title: "Academic Calendar",
                description: "Important dates, holidays, and academic schedule for the year.",
                keywords: ["calendar", "schedule", "dates", "holidays", "academic", "semester", "exams"],
                url: "academic-calendar.html",
                type: "Academic"
            },
            {
                id: 19,
                title: "Examination Schedule",
                description: "Mid-term and final examination dates and schedules for all programs.",
                keywords: ["exams", "examination", "schedule", "mid-term", "final", "test", "assessment"],
                url: "academic-calendar.html#exams",
                type: "Academic"
            },
            
            // Student Life
            {
                id: 20,
                title: "Student Activities",
                description: "Sports, societies, events and extracurricular activities for students.",
                keywords: ["activities", "sports", "events", "extracurricular", "clubs", "societies"],
                url: "student-life.html",
                type: "Student"
            },
            {
                id: 21,
                title: "Library Resources",
                description: "Access to digital and physical library resources for students.",
                keywords: ["library", "books", "resources", "digital", "study", "research"],
                url: "campus.html#library",
                type: "Campus"
            },
            {
                id: 22,
                title: "Computer Labs",
                description: "State-of-the-art computer laboratories with latest technology.",
                keywords: ["computer lab", "lab", "technology", "computers", "software", "internet"],
                url: "campus.html#labs",
                type: "Campus"
            },
            {
                id: 23,
                title: "Science Laboratories",
                description: "Well-equipped physics, chemistry, and biology laboratories.",
                keywords: ["science lab", "physics", "chemistry", "biology", "experiment", "practical"],
                url: "campus.html#science-labs",
                type: "Campus"
            },
            
            // Results & Achievements
            {
                id: 24,
                title: "Board Results",
                description: "Outstanding board examination results of our students over the years.",
                keywords: ["results", "board", "examination", "marks", "percentage", "success"],
                url: "results.html",
                type: "Results"
            },
            {
                id: 25,
                title: "Student Achievements",
                description: "Achievements and awards won by our students in various competitions.",
                keywords: ["achievements", "awards", "competitions", "recognition", "prizes"],
                url: "achievements.html",
                type: "Results"
            },
            
            // Career & Placement
            {
                id: 26,
                title: "Career Counseling",
                description: "Professional career counseling and guidance for students.",
                keywords: ["career", "counseling", "guidance", "future", "planning", "advice"],
                url: "career.html",
                type: "Career"
            },
            {
                id: 27,
                title: "University Placement",
                description: "Assistance with university admissions and placement after college.",
                keywords: ["university", "placement", "admission", "higher education", "guidance"],
                url: "career.html#placement",
                type: "Career"
            },
            
            // News & Updates
            {
                id: 28,
                title: "Latest News & Events",
                description: "Stay updated with the latest news and events at Aspire Colleges.",
                keywords: ["news", "events", "updates", "announcements", "notifications"],
                url: "news.html",
                type: "News"
            },
            {
                id: 29,
                title: "Upcoming Events",
                description: "Information about upcoming events, seminars, and workshops.",
                keywords: ["upcoming", "events", "seminars", "workshops", "conferences"],
                url: "news.html#events",
                type: "News"
            },
            
            // Social Media
            {
                id: 30,
                title: "Follow Us on Social Media",
                description: "Connect with us on Facebook, Twitter, Instagram, YouTube, and LinkedIn.",
                keywords: ["social media", "facebook", "twitter", "instagram", "youtube", "linkedin"],
                url: "index.html#social",
                type: "Social"
            }
        ];
    }
    
    init() {
        // Initialize all search elements
        this.searchInput = document.getElementById('searchInput');
        this.searchInputMobile = document.getElementById('searchInputMobile');
        this.searchResults = document.getElementById('searchResults');
        this.searchResultsMobile = document.getElementById('searchResultsMobile');
        this.searchToggle = document.getElementById('searchToggle');
        this.searchMobile = document.getElementById('searchMobile');
        this.closeSearch = document.getElementById('closeSearch');
        
        // Bind events
        this.bindEvents();
        
        // Initialize search history from localStorage
        this.initSearchHistory();
    }
    
    bindEvents() {
        // Desktop search input events
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => this.handleSearch(e, this.searchResults));
            this.searchInput.addEventListener('focus', () => this.handleSearchFocus(this.searchResults));
            this.searchInput.addEventListener('keydown', (e) => this.handleKeyNavigation(e, this.searchResults));
        }
        
        // Mobile search input events
        if (this.searchInputMobile) {
            this.searchInputMobile.addEventListener('input', (e) => this.handleSearch(e, this.searchResultsMobile));
            this.searchInputMobile.addEventListener('focus', () => this.handleSearchFocus(this.searchResultsMobile));
            this.searchInputMobile.addEventListener('keydown', (e) => this.handleKeyNavigation(e, this.searchResultsMobile));
        }
        
        // Mobile search toggle
        if (this.searchToggle && this.searchMobile) {
            this.searchToggle.addEventListener('click', () => this.toggleMobileSearch());
        }
        
        // Close mobile search
        if (this.closeSearch) {
            this.closeSearch.addEventListener('click', () => this.closeMobileSearch());
        }
        
        // Click outside to close results
        document.addEventListener('click', (e) => this.handleClickOutside(e));
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }
    
    handleSearch(event, resultsContainer) {
        const query = event.target.value.trim().toLowerCase();
        
        // Update search history
        if (query.length >= 2) {
            this.updateSearchHistory(query);
        }
        
        // Show/hide results based on query length
        if (query.length === 0) {
            this.showSearchHistory(resultsContainer);
            return;
        }
        
        if (query.length < 2) {
            this.showResults(resultsContainer);
            this.displayMessage(resultsContainer, 'Type at least 2 characters to search...');
            return;
        }
        
        // Perform search
        const results = this.search(query);
        this.displayResults(results, resultsContainer, query);
    }
    
    handleSearchFocus(resultsContainer) {
        const query = this.getCurrentQuery();
        
        if (!query || query.length < 2) {
            this.showSearchHistory(resultsContainer);
        }
    }
    
    handleKeyNavigation(event, resultsContainer) {
        const items = resultsContainer.querySelectorAll('.result-item');
        if (items.length === 0) return;
        
        const currentIndex = Array.from(items).findIndex(item => item.classList.contains('selected'));
        
        switch(event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.selectResultItem(items, currentIndex + 1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.selectResultItem(items, currentIndex - 1);
                break;
            case 'Enter':
                event.preventDefault();
                this.activateSelectedItem(items, currentIndex);
                break;
            case 'Escape':
                this.hideResults(resultsContainer);
                break;
        }
    }
    
    selectResultItem(items, newIndex) {
        // Remove selection from all items
        items.forEach(item => item.classList.remove('selected'));
        
        // Ensure index is within bounds
        if (newIndex < 0) newIndex = items.length - 1;
        if (newIndex >= items.length) newIndex = 0;
        
        // Select new item
        if (items[newIndex]) {
            items[newIndex].classList.add('selected');
            items[newIndex].scrollIntoView({ block: 'nearest' });
        }
    }
    
    activateSelectedItem(items, index) {
        if (items[index]) {
            window.location.href = items[index].href;
        }
    }
    
    handleClickOutside(event) {
        // Desktop search
        if (this.searchResults && 
            !this.searchResults.contains(event.target) && 
            event.target !== this.searchInput && 
            !this.searchInput?.contains(event.target)) {
            this.hideResults(this.searchResults);
        }
        
        // Mobile search
        if (this.searchResultsMobile && 
            !this.searchResultsMobile.contains(event.target) && 
            event.target !== this.searchInputMobile && 
            !this.searchInputMobile?.contains(event.target)) {
            this.hideResults(this.searchResultsMobile);
        }
    }
    
    handleKeyboardShortcuts(event) {
        // Ctrl/Cmd + K to focus search
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            if (this.searchInput) {
                this.searchInput.focus();
            }
        }
        
        // Escape to close mobile search
        if (event.key === 'Escape' && this.searchMobile?.classList.contains('active')) {
            this.closeMobileSearch();
        }
    }
    
    search(query) {
        // Score-based search algorithm
        return this.searchData
            .map(item => {
                let score = 0;
                
                // Title match (highest weight)
                if (item.title.toLowerCase().includes(query)) {
                    score += 100;
                }
                
                // Keyword matches (medium weight)
                const keywordMatches = item.keywords.filter(keyword => 
                    keyword.toLowerCase().includes(query)
                ).length;
                score += keywordMatches * 50;
                
                // Description match (lowest weight)
                if (item.description.toLowerCase().includes(query)) {
                    score += 10;
                }
                
                // Exact title match bonus
                if (item.title.toLowerCase() === query) {
                    score += 200;
                }
                
                // Exact keyword match bonus
                if (item.keywords.some(keyword => keyword.toLowerCase() === query)) {
                    score += 100;
                }
                
                return { ...item, score };
            })
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 10); // Limit to 10 results
    }
    
    displayResults(results, container, query) {
        if (results.length === 0) {
            this.displayMessage(container, `No results found for "${query}"`);
            return;
        }
        
        let html = '';
        results.forEach((result, index) => {
            // Highlight the search term in results
            const highlightedTitle = this.highlightText(result.title, query);
            const highlightedDesc = this.highlightText(result.description.substring(0, 120), query);
            
            html += `
                <a href="${result.url}" class="result-item" ${index === 0 ? 'data-first="true"' : ''}>
                    <div class="result-title">${highlightedTitle}</div>
                    <div class="result-desc">${highlightedDesc}...</div>
                    <span class="result-type">${result.type}</span>
                </a>
            `;
        });
        
        container.innerHTML = html;
        this.showResults(container);
    }
    
    showSearchHistory(container) {
        const history = this.getSearchHistory();
        
        if (history.length === 0) {
            this.displayMessage(container, 'Type to start searching...');
            return;
        }
        
        let html = `
            <div class="result-item" style="cursor: default;">
                <div class="result-title" style="font-size: 12px; color: #666; margin-bottom: 10px;">
                    <i class="fas fa-history"></i> Recent Searches
                </div>
            </div>
        `;
        
        history.slice(0, 5).forEach(term => {
            html += `
                <a href="#" class="result-item search-history-item" data-term="${term}">
                    <div class="result-title">
                        <i class="fas fa-search" style="font-size: 12px; margin-right: 8px;"></i>
                        ${this.escapeHtml(term)}
                    </div>
                </a>
            `;
        });
        
        html += `
            <div class="result-item" style="cursor: default; padding-top: 10px; border-top: 1px solid var(--border-color);">
                <button class="clear-history-btn" style="background: none; border: none; color: #666; font-size: 12px; cursor: pointer;">
                    <i class="fas fa-trash-alt"></i> Clear History
                </button>
            </div>
        `;
        
        container.innerHTML = html;
        this.showResults(container);
        
        // Add click handlers for history items
        container.querySelectorAll('.search-history-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const term = item.getAttribute('data-term');
                this.useSearchTerm(term, container);
            });
        });
        
        // Clear history button
        const clearBtn = container.querySelector('.clear-history-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.clearSearchHistory();
                this.showSearchHistory(container);
            });
        }
    }
    
    useSearchTerm(term, container) {
        // Set the search input value
        const input = container.closest('.search-mobile') ? this.searchInputMobile : this.searchInput;
        if (input) {
            input.value = term;
            input.focus();
            
            // Trigger search
            const event = new Event('input', { bubbles: true });
            input.dispatchEvent(event);
        }
    }
    
    highlightText(text, query) {
        if (!query || !text) return this.escapeHtml(text);
        
        const escapedText = this.escapeHtml(text);
        const escapedQuery = this.escapeHtml(query);
        
        const regex = new RegExp(`(${escapedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return escapedText.replace(regex, '<mark>$1</mark>');
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    displayMessage(container, message) {
        container.innerHTML = `<div class="no-results">${message}</div>`;
        this.showResults(container);
    }
    
    showResults(container) {
        if (container) {
            container.classList.add('active');
        }
    }
    
    hideResults(container) {
        if (container) {
            container.classList.remove('active');
        }
    }
    
    toggleMobileSearch() {
        this.searchMobile.classList.add('active');
        this.searchInputMobile.focus();
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Show search history if input is empty
        if (!this.searchInputMobile.value.trim()) {
            this.showSearchHistory(this.searchResultsMobile);
        }
    }
    
    closeMobileSearch() {
        this.searchMobile.classList.remove('active');
        this.searchInputMobile.value = '';
        this.hideResults(this.searchResultsMobile);
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
    
    getCurrentQuery() {
        return this.searchInput?.value.trim() || this.searchInputMobile?.value.trim() || '';
    }
    
    // Search History Functions
    initSearchHistory() {
        if (!localStorage.getItem('searchHistory')) {
            localStorage.setItem('searchHistory', JSON.stringify([]));
        }
    }
    
    getSearchHistory() {
        try {
            return JSON.parse(localStorage.getItem('searchHistory')) || [];
        } catch (e) {
            return [];
        }
    }
    
    updateSearchHistory(query) {
        const history = this.getSearchHistory();
        
        // Remove if already exists
        const index = history.indexOf(query);
        if (index > -1) {
            history.splice(index, 1);
        }
        
        // Add to beginning
        history.unshift(query);
        
        // Limit to 10 items
        const limitedHistory = history.slice(0, 10);
        
        localStorage.setItem('searchHistory', JSON.stringify(limitedHistory));
    }
    
    clearSearchHistory() {
        localStorage.setItem('searchHistory', JSON.stringify([]));
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if search elements exist on page
    if (document.getElementById('searchInput') || document.getElementById('searchInputMobile')) {
        window.searchEngine = new SearchEngine();
        
        // Add CSS for mark highlighting
        const style = document.createElement('style');
        style.textContent = `
            mark {
                background-color: #FFEB3B;
                color: #000;
                padding: 1px 4px;
                border-radius: 2px;
                font-weight: bold;
            }
            
            .result-item.selected {
                background-color: #f0f7ff;
                border-left: 3px solid var(--accent-color);
            }
            
            .search-history-item:hover {
                background-color: #f8f9fa;
            }
            
            .clear-history-btn:hover {
                color: var(--accent-color) !important;
            }
        `;
        document.head.appendChild(style);
        
        // Add keyboard shortcut hint
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.setAttribute('title', 'Press Ctrl+K to search');
        }
    }
});

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SearchEngine;
}