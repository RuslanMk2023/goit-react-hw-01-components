import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}> {title} </h2>}
    
    <ul className={styles.stat_list}>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li
            className={classNames(styles.item, styles[`item-${id}`])}
            key={id}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    }).isRequired
  ).isRequired,
};
