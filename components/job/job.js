import styles from './job.module.css'

const JobCard = ({job, category}) => {
    return(
        <div className={styles.card}>
            <div className={styles.cardInfo}>
                <img 
                className={styles.logo} 
                src={`${job.logo}`}
                alt={`A ${job.company} logo`}/>
                <div className={styles.description}>
                    <p className={styles.company}>{job.company}</p>
                    <p className={styles.isNew}>{job.isNew}</p>
                    <p className={styles.isFeatured}>{job.isFeatured}</p>
                    <h5 className={styles.position}>{job.position}</h5>
                    <p className={styles.workSchedule}>
                        {job.postedAt} &#8226; {job.contract} &#8226; {job.jobLocation} 
                    </p>
                </div>
            </div>
            <hr className={styles.divisionBar} />
            <div className={styles.categories}>
                <span className={styles.category} onClick={category.bind(this, job.role)}>{job.role}</span>
                <span className={styles.category} onClick={category.bind(this, job.level)}>{job.level}</span>
                {job.languages?.map(language => (
                    <span key={language}
                       className={styles.category} 
                       onClick={category.bind(this, language)}>
                        {language}
                    </span>
                ))} 
                {job.tools?.map(tool => (
                    <span key={tool}
                       className={styles.category} 
                       onClick={category.bind(this, tool)}>
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default JobCard; 
