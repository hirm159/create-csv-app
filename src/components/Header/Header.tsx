import react from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from '..';
import { appHistory } from '../../App';

export const Header = () => {
    return(
        <div>
            <Navbar expand="lg">
              <div>Create-Csv-App</div>
              <Navbar.Text>version 1.0.2</Navbar.Text>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link onClick={() => appHistory.push("/top")}>
                        トップページ
                    </Link>                    
                    <Link onClick={() => appHistory.push("/link")}>
                        リンク集
                    </Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
        </div>
    )
}