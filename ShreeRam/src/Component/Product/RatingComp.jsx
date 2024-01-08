import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const RatingComp = ({data}) => {
	return (
		<Box
			sx={{
				"& > legend": { mt: 2 },
			}}
		>
			<Typography component="legend">Read only</Typography>
			<Rating name="read-only" value={data?.rating} readOnly />
		</Box>
	);
};

export default RatingComp;
