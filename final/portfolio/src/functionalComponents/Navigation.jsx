import '../static/css/css-gg.css'
import '../static/css/Navigation.css'
import Button from './Button';
import { useState } from 'react';
import projects from "../static/javascripts/projects";


function Navigation({ className, navClick }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const navOptions = projects.map(content => {

    return (
      content.hasChildren ?
        <li className="navigation__item" key={content.name}>
          <Button className={`navigation__link`}
            ariaLabel={content.ariaLable}
            title={content.name}
          />

          <ul>
            {
              content.innerItem.map((innerContent) => (
                <li key={innerContent.name} 
                  className='navigation__item__li' >
                  <Button className="navigation__dropdown"
                    onClick={navClick}
                    title={innerContent.name}
                    href={innerContent.path}
                    ariaLabel={innerContent.ariaLable}
                  />
                </li>
              ))
            }
          </ul>
        </li>
        :
        <li className="navigation__item" key={content.name} >
          <Button className="navigation__link"
            onClick={navClick}
            title={content.name}
            href={content.path}
            ariaLabel={content.ariaLable} />
        </li>
    );
  });

  const dropDownClass = showDropdown ? 'navigation__list--open' : 'navigation__list';

  return (
    <nav className={`${className}`}>
      <Button className='navigation__button'
        onClick={() => {
          setShowDropdown(!showDropdown)
        }}
        ariaLabel={showDropdown ? "Close the Menu" : "Open the Menu"}
        title={showDropdown ? <i className='gg-crop' aria-label='Close the menu button' /> :
          <i className='gg-browse' aria-label='Open the menu button' />}
      />

      <ul className={`${dropDownClass}`}>
        {navOptions}
      </ul>
    </nav>
  );
}

export default Navigation;
