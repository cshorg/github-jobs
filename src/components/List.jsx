import Card from "./Card"

const List = () => {
  return (
    <div>
      <Card
        image={"public/devchallenges.png"}
        company={"Google"}
        title={"Front-end"}
        status={"Full time"}
        location={"Seattle"}
        time={"5 Days ago"}
      />
    </div>
  )
}

export default List
