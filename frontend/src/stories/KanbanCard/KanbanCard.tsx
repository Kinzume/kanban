import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  description: string;
};
export default function KanbanCard({ title, description }: Props) {
  const cardSx = {
    width: "15rem",
    height: "2.5rem",
    p: 1,
    "&:hover": {
      bgcolor: "primary.main",
    },
  };
  const titleSx = { typography: "body2" };
  const descriptionSx = { typography: "body1" };

  return (
    <Card sx={cardSx}>
      <Typography sx={titleSx} noWrap={true}>
        {title}
      </Typography>
      <Typography sx={descriptionSx} noWrap={true}>
        {description}
      </Typography>
    </Card>
  );
}
