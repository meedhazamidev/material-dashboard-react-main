/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useSelector } from "react-redux";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ComplexStatisticsCard({ title, logo, color }) {
  const darkModeRedux = useSelector((state) => state.darkMode);
  return (
    <MDBox display="flex" justifyContent="space-between" pt={1}>
      <MDBox
        component="img"
        src={logo}
        alt={title}
        width="40px"
        height="40px"
        position="relative"
        zIndex={1}
      />
      <MDBox
        ml={2}
        display="flex"
        flexDirection="column"
        justifyContent=" space-between"
        width="100%"
      >
        <MDTypography variant="h6" color="dark" fontWeight="medium">
          120
        </MDTypography>
        <MDTypography
          sx={{ fontSize: "small", width: "150px" }}
          color={color}
          fontWeight="regular"
          textTransform="capitalize"
        >
          {title}
        </MDTypography>
        <MDBox py={3} width="100%">
          <MDTypography
            fontWeight="regular"
            sx={{
              backgroundColor: darkModeRedux ? "#fff" : "#63A4FA",
              fontSize: "x-small",
              whiteSpace: "nowrap",
              width: "120px",
              height: "20px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: darkModeRedux ? "#63A4FA" : "#fff",
            }}
          >
            Voir les candidatures
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  logo: PropTypes.node.isRequired,
};

export default ComplexStatisticsCard;
