import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React, {useEffect, useState} from "react";

export function PopupMenu(props) {
  const [openMenuRef, setOpenMenuRef] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setOpenMenuRef(document.getElementById(props.id)), [props.id]);

  const items = props.items.map(item => {
    return (
      <MenuItem onClick={_ => {
        setIsMenuOpen(false);
        if (item.onClick)
          item.onClick(item.value)
      }}>{item.label}</MenuItem>)
  });

  return (
    <div>
      <Button innerRef={openMenuRef} id={props.id} aria-controls="simple-menu" aria-haspopup="true"
              onClick={_ => setIsMenuOpen(true)}>
        {props.label}
      </Button>
      <Menu
        anchorEl={openMenuRef}
        open={isMenuOpen}
        onClose={_ => setIsMenuOpen(false)}
      >{items}</Menu>
    </div>
  )
}