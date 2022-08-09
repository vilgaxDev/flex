import React  from "react";
import ChartsGrid from "components/Common/ChartsGrid";
import StatisticsCard from "./StatisticsCard";
import SubscribersCard from "./SubscribersCard";
import TopTrafficChainCard from "./TopTrafficChainCard";
import TopTrafficSourcesCard from "./TopTrafficSourcesCard";
import UserRetentionCard from "./UserRetentionCard";
import { Link } from "react-router-dom"

import {  FormGroup, Badge,
  CardBody,
  CardTitle,
  Input,
  Label,
  Table,} from "reactstrap";




const layouts = {
  lg: [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 3,
      h: 5,
      minW: 3,
      minH: 5,
      content: () => (
        <StatisticsCard
          title="Players Today"
          description="Total number of players today."
          value={7353}
          change={-1}
        />
      ),
    },
    {
      i: "b",
      x: 3,
      y: 0,
      w: 3,
      h: 5,
      minW: 3,
      minH: 5,
      content: () => (
        <StatisticsCard
          title="Daily Active Users"
          description="Number of users who play twice or more weekly."
          value={35620}
          change={5}
        />
      ),
    },
    {
      i: "c",
      x: 6,
      y: 0,
      w: 3,
      h: 5,
      minW: 3,
      minH: 5,
      content: () => (
        <StatisticsCard
          title="Total Revenue"
          description="Total value of in-app purchases, NFTs, and DLC sold."
          value={1351515}
          change={2}
        />
      ),
    },
    {
      i: "d",
      x: 9,
      y: 0,
      w: 3,
      h: 5,
      minW: 3,
      minH: 5,
      content: () => (
        <StatisticsCard
          title="ARP DAU"
          decimals={2}
          description="Average revenue per daily active user."
          value={35.76}
          change={25}
        />
      ),
    },
    { i: "e", x: 0, y: 5, w: 9, h: 12, minW: 6, minH: 12, content: () => <SubscribersCard /> },
    {
      i: "f",
      x: 9,
      y: 5,
      w: 3,
      h: 12,
      minW: 3,
      minH: 12,
      content: () => <TopTrafficSourcesCard />,
    },
    { i: "g", x: 0, y: 17, w: 9, h: 16, minW: 6, minH: 16, content: () => <UserRetentionCard /> },
    {
      i: "h",
      x: 9,
      y: 17,
      w: 3,
      h: 12,
      minW: 3,
      minH: 12,
      content: () => <TopTrafficChainCard />,
    },
  ],
  md: [
    { i: "a", x: 0, y: 0, w: 6, h: 6, minW: 6, minH: 6 },
    { i: "b", x: 6, y: 0, w: 6, h: 6, minW: 6, minH: 6 },
    { i: "c", x: 0, y: 0, w: 6, h: 6, minW: 6, minH: 6 },
    { i: "d", x: 6, y: 0, w: 6, h: 6, minW: 6, minH: 6 },
    { i: "e", x: 0, y: 12, w: 12, h: 16, minW: 12, minH: 16 },
    { i: "f", x: 0, y: 28, w: 6, h: 12, minW: 6, minH: 12 },
    { i: "g", x: 0, y: 40, w: 12, h: 18, minW: 12, minH: 18 },
    { i: "h", x: 6, y: 28, w: 6, h: 12, minW: 6, minH: 12 },
  ],
};

export default function GamingOverview() {
  return (
    <>
      <p className="mt-4 mb-0 fs-2 text-white">
        You are 10% ahead of your goals!
      </p>
      {/* <ChartsGrid className="gaming-overview" draggableHandle=".btn-move" rowHeight={10}  layouts={layouts} /> */}
      <FormGroup>

      <div className="mb-3 row">
            <label
              htmlFor="example-text-input"
              className="col-md-2 col-form-label"
            >
               Coin(ID)
            </label>
            <div className="col-md-4">
              <input
                className="form-control"
                type="text"
                defaultValue="Bitcoin"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label
              htmlFor="example-text-input"
              className="col-md-2 col-form-label"
            >
              Currency(ID)
            </label>
            <div className="col-md-4">
              <input
                className="form-control"
                type="text"
                defaultValue="USD"
              />
            </div>
             
          </div>

          <CardBody>
            <CardTitle className="mb-4">{this.props.taskTitle}</CardTitle>
            <div className="table-responsive">
              <Table className="table-nowrap align-middle mb-0">
                <tbody>
                  {this.props.data.map((task, i) => (
                    <tr key={i}>
                      <td style={{ width: "60px" }}>
                        <div className="custom-control custom-checkbox">
                          {task.isChecked ? (
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              checked
                              id={"customCheck1_" + task.id}
                            />
                          ) : (
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id={"customCheck1_" + task.id}
                            />
                          )}
                          <Label
                            className="form-check-label"
                            htmlFor={"customCheck1_" + task.id}
                          />
                        </div>
                      </td>
                      <td>
                        <h5 className="text-truncate font-size-14 m-0">
                          <Link to="#" className="text-dark">
                            {task.title}
                          </Link>
                        </h5>
                      </td>
                      <td>
                        <div className="team">
                          {task.teamMembers.map(member =>
                            member.image !== "Null" ? (
                              <Link
                                to="#"
                                className="team-member d-inline-block"
                              >
                                <img
                                  src={member.image}
                                  className="rounded-circle avatar-xs m-1"
                                  alt=""
                                />
                              </Link>
                            ) : (
                              <Link
                                to="#"
                                className="team-member d-inline-block"
                              >
                                <div className="avatar-xs">
                                  <span className="avatar-title rounded-circle bg-primary bg-soft text-primary">
                                    {member.imgText}
                                  </span>
                                </div>
                              </Link>
                            )
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="text-center">
                          <Badge
                            color={task.color}
                            className={
                              "badge-soft-" + task.color + " font-size-11"
                            }
                            pill
                          >
                            {task.tastStatus}
                          </Badge>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
       
          </FormGroup>
        

        </>

    
  );
}
