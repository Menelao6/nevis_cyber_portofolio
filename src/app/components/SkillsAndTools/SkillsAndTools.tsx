import styles from "./SkillsAndTools.module.css"

import {
  capabilities,
  tools,
  Capability,
  Tool
} from '../../json-datas/SkillsAndTools-data'

const SkillsAndTools: React.FC = () => {
  return (
    <section className={styles.skills} id="capabilities">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.terminalPrompt}>
            [ cat operational_capabilities/* ]
          </div>
          <h2 className={styles.sectionTitle}>
            Operational Capabilities
          </h2>
          <p className={styles.sectionSubtitle}>
            Practical skills and tools for comprehensive security operations
          </p>
        </div>

        <div className={styles.capabilitiesGrid}>
          {capabilities.map((cap: Capability) => (
            <div key={cap.id} className={styles.capabilityCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{cap.icon}</div>
                <h3 className={styles.cardTitle}>
                  {cap.category}
                </h3>
              </div>
              <ul className={styles.skillList}>
                {cap.skills.map((skill, idx) => (
                  <li key={idx} className={styles.skillItem}>
                    <span className={styles.skillName}>
                      {skill}
                    </span>
                    <span className="blinking-cursor"></span>
                  </li>
                ))}
              </ul>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        <div className={styles.toolsSection}>
          <div className={styles.toolsHeader}>
            <div className={styles.toolsPrompt}>
              tools_and_technologies/
            </div>
            <h3 className={styles.toolsTitle}>
              Key Tools & Technologies
            </h3>
          </div>

          <div className={styles.toolsGrid}>
            {tools.map((tool: Tool) => (
              <div key={tool.id} className={styles.toolCard}>
                <div className={styles.toolName}>
                  {tool.name}
                </div>
                <div className={styles.toolCategory}>
                  {tool.category}
                </div>
                <div className={styles.toolCursor}>
                  <span className="blinking-cursor"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsAndTools