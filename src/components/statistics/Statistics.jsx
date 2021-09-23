import PropTypes from 'prop-types';
function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <StatisticItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
}

function StatisticItem({ label, percentage }) {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default Statistics;
