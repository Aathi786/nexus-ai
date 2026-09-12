import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaShieldAlt, FaReact, FaHeart, FaComment, FaPaperPlane, FaBookmark, FaCheck, FaLock } from "react-icons/fa";
import { SiSpringboot, SiMongodb } from "react-icons/si";
import "./FeaturedInstagram.css";

function FeaturedInstagram() {
  const [activeViewTab, setActiveViewTab] = useState("feed");
  const [likedPosts, setLikedPosts] = useState({ 1: true, 2: false });
  const [savedPosts, setSavedPosts] = useState({ 1: false, 2: true });

  const toggleLike = (id) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id) => {
    setSavedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="featured-instagram-section section-container" id="featured-project">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">FLAGSHIP ENGINEERING SHOWCASE</span>
        <h2 className="section-title">
          INSTAGRAM <span>FULL-STACK APPLICATION</span>
        </h2>
        <p className="section-subtitle">
          A full-stack social media application engineered with a decoupled React client, Spring Boot RESTful services, stateless JWT security, and MongoDB Atlas persistence.
        </p>
      </div>

      <div className="instagram-showcase-card gold-panel">
        {/* Top Highlight Meta Banner */}
        <div className="showcase-top-bar">
          <div className="showcase-badge-group">
            <span className="showcase-flagship-pill">★ HERO FULL-STACK PROJECT</span>
            <span className="showcase-status-pill">
              <span className="status-live-dot"></span> LIVE DEPLOYED
            </span>
          </div>

          <div className="showcase-links-group">
            <a
              href="https://instagram-frontend-five-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-primary showcase-action-btn"
            >
              <span>LIVE DEMO</span>
              <FaExternalLinkAlt className="btn-ext-icon" />
            </a>

            <a
              href="https://github.com/Aathi786/Instagram-Frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-secondary showcase-action-btn"
            >
              <FaGithub />
              <span>FRONTEND REPO</span>
            </a>

            <a
              href="https://github.com/Aathi786/Instagram-Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-secondary showcase-action-btn"
            >
              <FaGithub />
              <span>BACKEND REPO</span>
            </a>
          </div>
        </div>

        {/* Visual Architecture Flow Banner */}
        <div className="architecture-pipeline-box">
          <span className="arch-pipeline-label">END-TO-END DATA FLOW</span>
          <div className="arch-pipeline-steps">
            <div className="pipeline-node">
              <div className="node-icon-wrap react">
                <FaReact />
              </div>
              <div className="node-meta">
                <span className="node-tech">REACT 19</span>
                <span className="node-desc">Client SPA UI</span>
              </div>
            </div>

            <div className="pipeline-connector">
              <span className="connector-arrow">➔</span>
              <span className="connector-label">JSON / REST</span>
            </div>

            <div className="pipeline-node">
              <div className="node-icon-wrap spring">
                <SiSpringboot />
              </div>
              <div className="node-meta">
                <span className="node-tech">SPRING BOOT</span>
                <span className="node-desc">REST API Engine</span>
              </div>
            </div>

            <div className="pipeline-connector">
              <span className="connector-arrow">➔</span>
              <span className="connector-label">AUTH FILTER</span>
            </div>

            <div className="pipeline-node">
              <div className="node-icon-wrap security">
                <FaShieldAlt />
              </div>
              <div className="node-meta">
                <span className="node-tech">SPRING SECURITY</span>
                <span className="node-desc">JWT Stateless Auth</span>
              </div>
            </div>

            <div className="pipeline-connector">
              <span className="connector-arrow">➔</span>
              <span className="connector-label">PERSISTENCE</span>
            </div>

            <div className="pipeline-node">
              <div className="node-icon-wrap mongo">
                <SiMongodb />
              </div>
              <div className="node-meta">
                <span className="node-tech">MONGODB ATLAS</span>
                <span className="node-desc">Cloud Document DB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid: Device/Browser Mockup & Technical Highlights */}
        <div className="showcase-content-grid">
          {/* Left Column: Interactive Application Simulation */}
          <div className="showcase-mockup-wrapper">
            <div className="mockup-header-bar">
              <div className="mockup-window-controls">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>

              {/* View Switcher Tabs */}
              <div className="mockup-tabs">
                <button
                  className={`mockup-tab ${activeViewTab === "feed" ? "active" : ""}`}
                  onClick={() => setActiveViewTab("feed")}
                >
                  FEED STREAM
                </button>
                <button
                  className={`mockup-tab ${activeViewTab === "profile" ? "active" : ""}`}
                  onClick={() => setActiveViewTab("profile")}
                >
                  USER PROFILE
                </button>
                <button
                  className={`mockup-tab ${activeViewTab === "arch" ? "active" : ""}`}
                  onClick={() => setActiveViewTab("arch")}
                >
                  SYSTEM ARCHITECTURE
                </button>
              </div>

              <div className="mockup-ssl-badge">
                <FaLock className="ssl-icon" />
                <span>HTTPS LIVE</span>
              </div>
            </div>

            {/* Mockup Screen Viewport */}
            <div className="mockup-viewport">
              {activeViewTab === "feed" && (
                <div className="mockup-feed-view">
                  {/* Top Stories Row */}
                  <div className="feed-stories-row">
                    {["Aathithya", "alex_dev", "sarah_k", "tech_lead", "cloud_eng"].map((user, i) => (
                      <div key={user} className="story-item">
                        <div className={`story-ring ${i === 0 ? "self-story" : ""}`}>
                          <div className="story-avatar">
                            {user.slice(0, 2).toUpperCase()}
                          </div>
                        </div>
                        <span className="story-username">{user}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sample Post Card 1 */}
                  <div className="feed-post-card">
                    <div className="post-card-header">
                      <div className="post-user-info">
                        <div className="post-avatar">AR</div>
                        <div>
                          <span className="post-username">aathithya_dev</span>
                          <span className="post-location">Chennai, India • Spring Boot + MongoDB Atlas</span>
                        </div>
                      </div>
                      <span className="post-menu-dots">•••</span>
                    </div>

                    {/* Post Content Banner */}
                    <div className="post-media-area">
                      <div className="post-media-graphic">
                        <div className="graphic-gold-code">
                          <span className="code-lang">Java & Spring Boot API</span>
                          <code>@PostMapping("/api/posts")</code>
                          <code>public ResponseEntity&lt;Post&gt; createPost(...) &#123;</code>
                          <code>&nbsp;&nbsp;return postService.save(post, jwtToken);</code>
                          <code>&#125;</code>
                        </div>
                        <div className="media-overlay-tag">
                          <span>MONGODB ATLAS CLOUD PERSISTENCE</span>
                        </div>
                      </div>
                    </div>

                    {/* Post Actions Bar */}
                    <div className="post-actions-bar">
                      <div className="left-actions">
                        <button
                          className={`action-icon-btn ${likedPosts[1] ? "liked" : ""}`}
                          onClick={() => toggleLike(1)}
                        >
                          <FaHeart />
                        </button>
                        <button className="action-icon-btn">
                          <FaComment />
                        </button>
                        <button className="action-icon-btn">
                          <FaPaperPlane />
                        </button>
                      </div>
                      <button
                        className={`action-icon-btn ${savedPosts[1] ? "saved" : ""}`}
                        onClick={() => toggleSave(1)}
                      >
                        <FaBookmark />
                      </button>
                    </div>

                    <div className="post-stats-line">
                      <strong>{likedPosts[1] ? "128 likes" : "127 likes"}</strong>
                      <p className="post-caption">
                        <strong>aathithya_dev</strong> Built the complete full-stack Instagram replica with decoupled React client, Spring Boot REST controllers, JWT security filter and MongoDB Atlas document models! 🚀
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeViewTab === "profile" && (
                <div className="mockup-profile-view">
                  <div className="profile-header-meta">
                    <div className="profile-avatar-large">AR</div>
                    <div className="profile-details">
                      <div className="profile-handle-row">
                        <h4 className="profile-handle">aathithya.dev</h4>
                        <span className="profile-follow-badge">DEVELOPER</span>
                      </div>
                      <div className="profile-counters">
                        <span><strong>18</strong> Posts</span>
                        <span><strong>420</strong> Followers</span>
                        <span><strong>190</strong> Following</span>
                      </div>
                      <p className="profile-bio-text">
                        <strong>Aathithya R</strong> | Java Full Stack Developer<br />
                        ⚡ Building enterprise Java & React applications<br />
                        📍 Spring Boot • Spring Security • MongoDB Atlas
                      </p>
                    </div>
                  </div>

                  <div className="profile-grid-preview">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="profile-grid-item">
                        <div className="grid-item-inner">
                          <span className="grid-item-tech">
                            {item === 1 ? "REST API" : item === 2 ? "JWT AUTH" : item === 3 ? "MONGO DB" : item === 4 ? "REACT 19" : item === 5 ? "SECURITY" : "MVC ARCH"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeViewTab === "arch" && (
                <div className="mockup-arch-view">
                  <h4 className="arch-view-title">FULL-STACK SYSTEM TOPOLOGY</h4>
                  <div className="arch-layers-list">
                    <div className="arch-layer-card">
                      <div className="layer-tag">PRESENTATION LAYER</div>
                      <div className="layer-name">React SPA (Vite, Responsive UI, Axios Interceptors)</div>
                      <p className="layer-desc">Manages user sessions, feeds, likes, modal dialogs, and JWT token authorization headers.</p>
                    </div>

                    <div className="arch-layer-card">
                      <div className="layer-tag">SECURITY & GATEWAY</div>
                      <div className="layer-name">Spring Security + JWT Token Filter</div>
                      <p className="layer-desc">Validates Bearer tokens on protected REST endpoints, enforces CORS policies and authentication exceptions.</p>
                    </div>

                    <div className="arch-layer-card">
                      <div className="layer-tag">BUSINESS SERVICE LAYER</div>
                      <div className="layer-name">Spring Boot RESTful Controllers & Services</div>
                      <p className="layer-desc">Processes CRUD operations for user profiles, feed generation, image metadata, and follow graphs.</p>
                    </div>

                    <div className="arch-layer-card">
                      <div className="layer-tag">PERSISTENCE TIER</div>
                      <div className="layer-name">MongoDB Atlas (Cloud NoSQL Database)</div>
                      <p className="layer-desc">Stores JSON documents with flexible schemas for users, posts, comments, and relationship indices.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Deep Technical Case Study Details */}
          <div className="showcase-details-wrapper">
            <h3 className="showcase-detail-heading">
              Technical Implementation & Engineering Highlights
            </h3>

            <div className="showcase-tech-badges">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Java</span>
              <span className="tech-badge">Spring Boot</span>
              <span className="tech-badge">Spring Security</span>
              <span className="tech-badge">JWT Authentication</span>
              <span className="tech-badge">MongoDB Atlas</span>
              <span className="tech-badge">RESTful APIs</span>
            </div>

            <div className="showcase-bullets">
              <div className="bullet-point">
                <div className="bullet-check"><FaCheck /></div>
                <div>
                  <strong>Decoupled Architecture:</strong> Engineered clean separation between the React client and Spring Boot backend, communicating purely over RESTful HTTP APIs.
                </div>
              </div>

              <div className="bullet-point">
                <div className="bullet-check"><FaCheck /></div>
                <div>
                  <strong>Stateless Security Pipeline:</strong> Implemented JWT token generation upon login, with customized Spring Security filters ensuring private endpoints remain protected.
                </div>
              </div>

              <div className="bullet-point">
                <div className="bullet-check"><FaCheck /></div>
                <div>
                  <strong>Cloud NoSQL Persistence:</strong> Leveraged MongoDB Atlas to handle dynamic document structures for social posts, likes arrays, nested comments, and user records.
                </div>
              </div>

              <div className="bullet-point">
                <div className="bullet-check"><FaCheck /></div>
                <div>
                  <strong>Interactive Social Features:</strong> Integrated post publishing, feed streams, real-time like toggles, user profile viewing, and responsive layout styling.
                </div>
              </div>
            </div>

            {/* Quick Action Footer */}
            <div className="showcase-footer-actions">
              <a
                href="https://instagram-frontend-five-mu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-primary full-w-btn"
              >
                <span>LAUNCH LIVE APPLICATION</span>
                <FaExternalLinkAlt />
              </a>

              <div className="showcase-repo-duo">
                <a
                  href="https://github.com/Aathi786/Instagram-Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-outline"
                >
                  <FaGithub /> Frontend Code
                </a>
                <a
                  href="https://github.com/Aathi786/Instagram-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-outline"
                >
                  <FaGithub /> Backend Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedInstagram;
