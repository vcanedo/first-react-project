import styles from './Phrase.module.css';

const Phrase = () => {
  return (
    <div className={styles.phraseContainer}>
      <p className={styles.phraseContent}>This is a phrase</p>
    </div>
  );
}

export default Phrase;
