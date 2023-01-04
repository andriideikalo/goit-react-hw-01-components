import PropTypes from 'prop-types';
import { FaPercent } from 'react-icons/fa';
import { StatStyles } from "./StatStyles"
import {getRandomHexColor} from "./GetRandomHexColor"


export const Statistics = ( { title, stats } ) => {
    return (<StatStyles>
       <section className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
{stats.map(({ id, label, percentage }) => (
          <li
            className="item"
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={id}
             >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}<FaPercent/></span>
          </li>
        ))}
  </ul>
</section>
    </StatStyles>);
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.any.isRequired,
      percent: PropTypes.any.isRequired,
    }),
  ),
};

export default Statistics;
