import PropTypes from 'prop-types';
function Statistics(props) {
  const { title, stats } = props;
  console.log(stats);
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {stats.map(stat => {
        return (
          <StatisticItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        );
      })}
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
  stats: PropTypes.array,
};

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default Statistics;
