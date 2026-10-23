
import React from "react";
import { Typography, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography>Không tìm thấy người dùng.</Typography>;
  }

  return (
    <div>
      <Typography variant="h5">
        {user.first_name} {user.last_name}
      </Typography>

      <Typography>
        <strong>Location:</strong> {user.location}
      </Typography>

      <Typography>
        <strong>Occupation:</strong> {user.occupation}
      </Typography>

      <Typography>
        <strong>Description:</strong> {user.description}
      </Typography>

      <Button
        component={Link}
        to={"/photos/" + user._id}
        variant="contained"
        sx={{ marginTop: 2 }}
      >
        View Photos
      </Button>
    </div>
  );
}

export default UserDetail;