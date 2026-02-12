import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UppdateSettingsForm from "../features/settings/UpdateSettingsForm";
function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UppdateSettingsForm />
    </Row>
  );
}

export default Settings;
