import { Row, Col, Typography, Card, Avatar, Select } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplefied }) => {
  const {} = useGetCryptoNewsQuery();

  return <div>News</div>;
};

export default News;
