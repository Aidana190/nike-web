import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import { useBM } from "../context/BMProvider";
  import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
  
  const BookMark = () => {
    const { bookmarks, checkPostInBm, deletePostFromBM, getPost } = useBM();
    console.log(bookmarks.posts);
  
    useEffect(() => {
      getPost();
    }, []);
  
    const cartCleaner = () => {
      localStorage.removeItem("bm");
      getPost();
      console.log(bookmarks);
    };
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          background:"#333",
          height:"100vh"
        }}
      >
        {bookmarks.posts.map((elem) => (
          <Card
            key={elem.item.id}
            sx={{
              height: 360,
              boxShadow: "none",
              margin: "40px 40px",
              background:"#333",
              width: { md: "30vw", lg: "19vw" },
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ height: 240, borderRadius: 4 }}
                image={elem.item.image}
              />
            </CardActionArea>
            <CardContent sx={{ padding: "20px 5px 0 5px" }}>
              <Typography
                variant="h5"
                fontSize="25px"
                fontWeight="700"
                component="div"
                color={"white"}
              >
                {elem.item.title}
              </Typography>
              <Typography color="black" fontSize="15px" fontWeight="700">
                {elem.item.description}
              </Typography>
              <Button
                variant="contained"
                sx={{bgcolor: "white", color:"black"}}
                onClick={() => deletePostFromBM(elem.item.id)}
              >
                REMOVE
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };
  
  export default BookMark;