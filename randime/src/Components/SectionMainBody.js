import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import content from './img/yea.jpg'

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function SectionMainBody() {
	const classes = useStyles();
	return (
		<div>
			<section className="hero-section text-center">
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<form>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor="select" id="label">Who's your favourite Centre Midfielder?</InputLabel>
								<Select labelId="label" id="select" value="20">
									<MenuItem value="Brian Ferry">Brian Ferry</MenuItem>
									<MenuItem value="Muzzy Isset">Muzzy Isset</MenuItem>
								</Select>
							</FormControl>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor="select" id="label">Who's is the octopus?</InputLabel>
								<Select labelId="label" id="select" value="20">
									<MenuItem value="Purple">Purple</MenuItem>
									<MenuItem value="Blue">Blue</MenuItem>
								</Select>
							</FormControl>
						</form>
					</Grid>
					<Grid item xs={8}>
						<img src={content} alt="Logo" />
					</Grid>
				</Grid>
			</section>
		</div>
	);
}
