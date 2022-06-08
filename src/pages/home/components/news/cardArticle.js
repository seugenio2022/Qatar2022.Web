import { Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function CardArticle({ item, size }) {

	const defaultSrcImg = ""
	let srcImg = "";

	if (size === "small") {
		srcImg = item.imgSmall ? item.imgSmall : defaultSrcImg
	}
	if (size === "medium") {
		srcImg = item.imgMedium ? item.imgMedium : defaultSrcImg
	}

	if (size === "large") {
		srcImg = item.imgLarge ? item.imgLarge : defaultSrcImg
	}

	return (
		<Stack direction={size === "small" ? "row" : "column"}
			spacing={2}
			height="100%"
			justifyContent="flex-start"
			alignContent="center"
		>
			<div>
				<img style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }} src={srcImg} alt={item.title} />
			</div>
			<Stack pr={4} height="100%" direction="column" justifyContent="space-between">
				<Box>
					<Typography variant="subtitle2" >Copa Mundial de la FIFA Catar 2022™</Typography>
					<Typography variant="h6">{item.title}</Typography>
				</Box>
				<Typography variant="caption">{size === "small" ? "" : "date"}</Typography>
			</Stack>

		</Stack>
	)
}