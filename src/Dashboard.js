import { makeStyles } from '@mui/styles';
import DataLink from './DataLink';
import { Container, Typography } from '@mui/material';


import overview from './Assets/overview.png';
import Trend from './Assets/Trend.png';
import Performance from './Assets/Performance.png';
import comparative from './Assets/comparative.png';
const TableauLinks = [
  {
    name: 'Overview Dashboard',
    url: 'https://public.tableau.com/app/profile/jai.negi1395/viz/InternshipProject_17145601334800/Overviewdash',
    image: overview,
  },
  {
    name: 'Trend Dashboard',
    url: 'https://public.tableau.com/app/profile/jai.negi1395/viz/InternshipProject1_17145661521060/TrendDash',
    image: Trend,
  },
  {
    name: 'Performance Dashboard',
    url: 'https://public.tableau.com/app/profile/jai.negi1395/viz/InternshipProject2_17145662277530/Performancedash',
    image:Performance,
  },
  {
    name: 'Comparative Dashboard',
    url: 'https://public.tableau.com/app/profile/jai.negi1395/viz/InternshipProject3_17145671815290/Comoparativedash',
    image: comparative,
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    fontFamily: 'Baskerville, serif',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  dataLink: {
    width: 300,
    margin: 20,
    transition: 'transform 0.3s ease-in-out', 
    '&:hover': {
      transform: 'scale(1.5)', 
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h1" className={classes.header} style={{ fontFamily: 'Baskerville, serif' }}>
        INCIDENT MANAGEMENT LOG SUMMARY 
      </Typography>
      <div className={classes.linkContainer}>
        {TableauLinks.map((link) => (
          <DataLink key={link.name} name={link.name} url={link.url} image={link.image} />
        ))}
      </div>
    </Container>
  );
};

export default Dashboard;
