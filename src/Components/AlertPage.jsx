import Alert from "react-bootstrap/Alert"

function AlertPage() {
  return (
    <Alert className="my-3 bg-warning-subtle">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
    </Alert>
  )
}

export default AlertPage
