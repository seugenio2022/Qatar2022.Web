import { Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function CardArticle({ item, size }) {

	const defaultSrcImg = ""
	let srcImg = "";

	if (size == "small") {
		srcImg = item.imgSmall ? item.imgSmall : defaultSrcImg
	}
	if (size == "medium") {
		srcImg = item.imgMedium ? item.imgMedium : defaultSrcImg
	}

	if (size == "large") {
		srcImg = item.imgLarge ? item.imgLarge : defaultSrcImg
	}

	return (
		<Container disableGutters>
			<img style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }} src={srcImg} alt={item.title} />
			<Stack component={"span"} mx={2} direction="column" >
				<Typography variant="subtitle2" mt={2}>Copa Mundial de la FIFA Catar 2022™</Typography>
				<Typography variant="h6">{item.title}</Typography>
				<Typography variant="caption">{"date"}</Typography>
			</Stack>
		</Container>
	)
}