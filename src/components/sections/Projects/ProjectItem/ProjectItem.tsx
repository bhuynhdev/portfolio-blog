import styles from "./ProjectItem.module.scss";
import Image from "next/image";
import { ProjectInfo } from "common/types";
import { Icon } from "components/shared";

interface ProjectItemProps extends ProjectInfo {}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  img = "laptop1.jpg",
  title = "Project heading",
  desc = "A warehouse robot program that scans barcode and picks packages",
  skills = ["React"],
  repo = "http://github.com",
  site,
}) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.background}
        alt="Project thumbnail"
        src={`/images/${img}`}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.description}>
          <p>{desc}</p>
          <div className={styles.skills}>
            {skills.length > 0 &&
              skills.map((skill, i) => {
                return <Icon key={`${skill}-${i}`} type="skill" iconName={skill} size={30} />;
              })}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.externalLinks}>
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <Icon type="static" iconName="repo" size={20} title="Repo link" />
            </a>
            {site && (
              <a href={site}>
                <Icon type="static" iconName="hyperlink" size={20} title="Live site" />
              </a>
            )}
          </div>
          {/* <div>
            <a href="/#" className={styles.blogLink}>
              Learn more
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
