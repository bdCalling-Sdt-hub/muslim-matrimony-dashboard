import { Col, Row } from "antd";
import DashboardBarChart from "./DashboardBarChart";
import DashboardUserInfo from "./DashboardUserInfo";
import DashboardPackageUsers from "./DashboardPackageUsers";
// import DashboardAllUsers from "./DashboardAllUsers";

const DashboardHeader = () => {
  return (
    <div>
      <div>
        <Row gutter={6} className="mb-4">
          <Col lg={24}>
            <DashboardUserInfo />
            <DashboardBarChart />
            <DashboardPackageUsers />
          </Col>

          {/* <Col lg={8}>
            <DashboardAllUsers />
          </Col> */}
        </Row>
      </div>
    </div>
  );
};

export default DashboardHeader;
