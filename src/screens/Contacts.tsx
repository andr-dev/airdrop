import { Box, Container, Grid, List, Stack, TextField } from "@mui/material";
import { UserCard } from "./receive/UserCard";
import { ContactCard } from "./contacts/ContactCard";
import { FixedSizeList, ListChildComponentProps } from 'react-window';

export type Contacts = Map<string, string>;

export default function ContactsScreen() {
  return (
    // <Stack direction="row" columnGap={2}>
    //   <Stack spacing={10}>
    //     <TextField
    //       fullWidth
    //       id="address-or-contact"
    //       label="Search for an address or contact"
    //       variant="outlined"
    //       size="small"
    //       style={{ background: "#222B3A", borderWidth: "0px"}}
    //     ></TextField>
    //     <List style={{ maxHeight: '100%', overflow: 'auto' }}>
    //       <UserCard name={"Matt"} />
    //       <UserCard name={"Andre"} />
    //       <UserCard name={"Andre"} />
    //       <UserCard name={"Andre"} />
    //       <UserCard name={"Andre"} />
    //       <UserCard name={"Andre"} />
    //       <UserCard name={"Andre"} />

    //     </List>
    //   </Stack>

    //   <ContactCard></ContactCard>

    // </Stack>
    <Stack direction="row" columnGap={2}>
  <Stack spacing={2}>
    <TextField
      fullWidth
      id="address-or-contact"
      label="Search for an address or contact"
      variant="outlined"
      size="small"
      style={{ background: "#222B3A", borderWidth: "0px" }}
    ></TextField>
    <List style={{ maxHeight: '600px', overflow: 'auto' }}>
      <UserCard name={"Matt"} />
      <UserCard name={"Andre"} />
      <UserCard name={"Andre"} />
      <UserCard name={"Andre"} />
      <UserCard name={"Andre"} />
      <UserCard name={"Andre"} />
      <UserCard name={"Andre"} />
    </List>
  </Stack>

  <ContactCard></ContactCard>
</Stack>
  );
}