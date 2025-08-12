import styles from "./SkillsAndTools.module.css"

import {
  tools,
  Tool
} from '../../json-datas/SkillsAndTools-data'

const SkillsAndTools: React.FC = () => {
  return (
    <section className={styles.skills} id="capabilities">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.terminalPrompt}>
            [ cat tools_and_technologies/* ]

        <div className={styles.toolsSection}>
          <div className={styles.toolsHeader}>
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
