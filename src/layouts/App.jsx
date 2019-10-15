import React, { Fragment } from "react";
import { Container, Dropdown, Header, Menu } from "semantic-ui-react";
import io from "../utils/socket.client";

/**
 * This is the entry point layout component
 *
 * @param {object} props
 */
const App = () => {
  var socket = io();
  return (
    <Fragment>
      <Menu inverted>
        <Container>
          <Menu.Item as="a" className="gs-u-p+" header>
            {/* <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} /> */}
            CodeRoyale
          </Menu.Item>

          {/* <Menu.Item as="a">Home</Menu.Item> */}

          <Menu.Menu position="right">
            <Dropdown item simple text="@craigharvie">
              <Dropdown.Menu>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>

      <Container text>
        <Header as="h1">Enter the maze</Header>
      </Container>
    </Fragment>
  );
};

export default App;
