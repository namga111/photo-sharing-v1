
import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  if (!photos) {
    return <Typography>Không tìm thấy ảnh của người dùng.</Typography>;
  }

  return (
    <div>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Photos
      </Typography>

      {photos.map((photo) => (
        <Card key={photo._id} sx={{ mb: 3 }}>
          <CardMedia
            component="img"
            image={"/images/" + photo.file_name}
            alt="User photo"
            sx={{
              maxHeight: 500,
              objectFit: "contain",
              backgroundColor: "#eee",
            }}
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Posted: {new Date(photo.date_time).toLocaleString()}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6">
              Comments
            </Typography>

            {photo.comments && photo.comments.length > 0 ? (
              photo.comments.map((comment) => (
                <div key={comment._id}>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(comment.date_time).toLocaleString()}
                  </Typography>

                  <Typography>
                    <Link to={"/users/" + comment.user._id}>
                      {comment.user.first_name} {comment.user.last_name}
                    </Link>
                    : {comment.comment}
                  </Typography>

                  <Divider sx={{ my: 1 }} />
                </div>
              ))
            ) : (
              <Typography variant="body2">
                No comments yet.
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;