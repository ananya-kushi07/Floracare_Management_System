import React from "react";
import { Box, Container, Typography, Card, CardContent, Button, Grid, Divider } from "@mui/material";
import Navbar from "./Navbar"; // Assuming Navbar is in the same directory
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Image with text */}
      <Box
        sx={{
          backgroundImage:
            'url("https://png.pngtree.com/thumb_back/fw800/background/20241219/pngtree-a-close-up-of-plant-with-vibrant-pink-and-orange-leaves-image_16821399.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 8,
          mx: 0,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            textAlign: "center",
            textShadow: "3px 3px 5px rgba(0, 0, 0, 0.7)",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          Grow Beautifully
        </Typography>
      </Box>

      {/* Three Cards: Plants, Gardener, Fertilizer */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Plants Card */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ backgroundColor: "#A0AF84", color: "#4A6670" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Plants
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Discover a wide variety of plants to enhance your garden.
                </Typography>
                <Button
                  component={Link}
                  to="/plant"
                  sx={{
                    backgroundColor: "#4A6670",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#668F80",
                    },
                  }}
                >
                  Explore Plants
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Gardener Card */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ backgroundColor: "#A0AF84", color: "#4A6670" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Gardener
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Connect with skilled gardeners for your garden's needs.
                </Typography>
                <Button
                  component={Link}
                  to="/gardener"
                  sx={{
                    backgroundColor: "#4A6670",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#668F80",
                    },
                  }}
                >
                  Find a Gardener
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Fertilizer Card */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ backgroundColor: "#A0AF84", color: "#4A6670" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Fertilizer
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Explore the best fertilizers for your garden's growth.
                </Typography>
                <Button
                  component={Link}
                  to="/fertilizer"
                  sx={{
                    backgroundColor: "#4A6670",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#668F80",
                    },
                  }}
                >
                  Buy Fertilizer
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* About Us Section */}
      <Container sx={{ py: 4 }}>
        <Divider sx={{ borderColor: "#4A6670", my: 2 }} />
        <Grid container spacing={4} alignItems="center">
          {/* About Us Text */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#4A6670", mb: 2 }}
            >
              About Us
            </Typography>
            <Typography sx={{ color: "#4A6670", lineHeight: 1.6 }}>
              We are dedicated to bringing life to your gardens with our diverse
              range of plants, expert gardening services, and quality
              fertilizers. Our mission is to help you create a thriving and
              beautiful green space.
            </Typography>
          </Grid>

          {/* Image Pile */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", height: "300px", width: "100%" }}>
              {/* Placeholder Images */}
              <Box
                component="img"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGB8bGRgYFh4gHxsiGx4bHSEdIB8bICggGhslHSAfITEhJSkrLi4uGCAzODMtNygtLisBCgoKDg0OGxAQGyslICYvLy8tLS0rLy8vLS8tLTUtLzAtLy0tLS0vNS0tLS0vMC8vLS0vLS0tLy0tLS0tLS0tLf/AABEIALcBFAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAIHAf/EAEQQAAIBAgQEBAMFBgUCBAcAAAECEQMhAAQSMQVBUWEGEyJxMoGRI0KhsfAUM1LB0eEHFWKC8UNyJHOSohZTVGOTsrT/xAAbAQADAAMBAQAAAAAAAAAAAAACAwQAAQUGB//EADYRAAEDAgQDBwMEAgEFAAAAAAEAAhEDIQQSMUFRYfAFEyJxgZGhFLHRMkLB8RXhUgYjM4Ki/9oADAMBAAIRAxEAPwCLxblKlTLjy0LaW1NABgQfn9MICVbEkja0785Agfh746nmuJ+TSuJVzpJidPpaGjmBzHSfYouYpTS80AGahUuQNWoCSbEkiWU6rXa8RiEPymD6JlZsmVQV9xF94HOL87xF7jrh64j/AOKr08rTDrlqCJ53lrGpysyRsDJK6jsFY9MIAkaRyJiYMnlIMz/zjpf+HZrilmnpBSxqlXDIDbSvPVIuTaCB0x0sOYUVRtkS4t/hvlSrLly1GqiqVfzGYTLfEGJsYFxBHLFXwhxMVqTpXQHM5YhWmW1gTBi5JKgqIEWDE3ADVUypNJnMUmWkC4BHpjWWUtGoyLG/OdwMJGXKDiaMDPnUHRgDF0AYTEgyI67++HpbQYRzxJWjKCnIM1BUGkEAWdWHRfuMR1qHC3QUFR7D8sNPifL6shln5rUZf9rBzH/tX6YV8vSOlfbHOrXuurQ0RymrMNfqA0qqnlCkTuZub7GwFrDCv/iZVbXS9epivIQN/pPWfxw5ooFJBUJKBdRjdQF1EjrABMe8dMcy49Xd2FR7GoutVP3VY+lb72X8b7nDqhIbHkoiATKF0mBsZ2iCeXsPz/th/wDCOn9jrASSK1DcRYs36+mOd0SQwBid7j36bL/U4b/Cmd006ymfW1Ez3WoN+5lvoffCYujYfEEx164100MXpyO9lsPrOKyZcepI0tBMiTpgSDEwSQLLbe52mdUHoe5Ogc95AnG/n6YP3zJYkRafU1xbmJmwA5HGUctwQn4gkQZXqcOYU0anWLEgSpWL9iDHsCLk7jEuQy1arTeqmioqfFNiLTsQv03wL4TxRHbyvNvBGrSZ7QNybzBHLDJ4VbSM2jMGY0yfSCBOhoN+bLqPsowRpNvZLp1nyLrkvEao1sdpY4s+Hq4WujWEHn8+l4tihmzLG/X9d8XPDKa8xSXSTLAaQLmeWDa3NZILoMlOdTitUn7M0z7X6YD5zjmdU20j/aRh1fwbScq5p6AAdaICGi0sAxaSOiyOW5nFLj/h5MtUpilVqOjgkBmkWK/Ij1D8cLqUXN0Ktp12v2SLxfPZitRU1dtUqJPTv9Pnhfy7GSJN/wAf1/XDT4molUmSV1nSD2G30I+g64Wqa+oHeeUb/l/eMaYLXSK8ZrLrmUNMU0+zT4RfyxOw5kXxYHEaaffVfmi/0xyTPZmSwGYYEWgkiOot0wK/aqjTDsYMi5PPGB19E3MF0PxV4nCOyUqdN5EliTvB/haDaL++N/BGcbOeZRbL0jAB1ywC7iCb6ZvtvGEl1MLqMnTJnv8AoY6j4HppRy2qkGao6hm2gm4AmZ0qVsB+ZwbGygfUI3U+b4HlKbLoq1aQgzpZtJKkTZwSBfmbgkxAxDmOF06dA1GrO9x6wgIgzB+zA9MR65ix2mMWOK5NDlXp1AK0oSyoYJbQb00GqCWgiI3Nz963xTiNKllnZjoCJGh76CVGhXCS4NxImSCbRtQ1jQNFO6o87pf4nSqUAKhWQplmQ2HpA1yIc2A25z1wuZmvU1hkenSpKiIBrJILBCkNqlgGb4iLwQeWHGnmwcjSLP5p0g66sS4IaS0iYAJFhNsKKeHqebK0kBi7eZERrO0hRYgaoM3O4sCTpmAgHFbNxar5l6TMysGEMQBuAXKsS7GJFgBA3gjFjiGfVldKqx6QHOrcgCOUFvu6gJgb3jBThfg+gtN/ts04TUshnWFiAiqCNQB59flhe4pTL0kVUr1DqJYaYZhHxEgN3HaCedocWKlhmiUBdeyBcbyqCk1bzQ7u3oWbiDfVHIDtcxgPmOHhKdOoSnrDHSwOq1p7DnPb2xrxHLlSWjSCfSpPW43ubEXxL/kyNQ87zwCIGgqZ1bmL3AF5jmBbBNMABbaJEyiHDRmGpKQ1ogbbAxzOMwMyDhVg1VQzs1PUfeeXtjMNyt5oSw8vZdVzfilHR4ZChDBZaAYuU1g89QBIPbtjzJZjK1qag0pQtrhVI66XJUK5U6TvvPtCU5B8spVdSiK+lzyVlASS0H1LA5FhsLwSzAR6tNFzD5cwrqGT06jpVqSwREFdtRUajexGPNGg1rYBI53t7D5XXLiXSmZKXDqWotRBGoksZIQEaYHRbd41J2ONa3CcqpJoPUoMdwHBLC41faagfa0TtfFB8pTZVAVqDFmeFbR6vUoUaiUdhPIMIQ/xX8y2foFKYRkraHIpk1SKmpVkSWKmbCQLHWNoulr6jLsc6d79Dr3PK06gK6mZzwRqaVkqoV0MjoFPqBP3ABsZmJM7c8DeKZmuuYp166U2ZATCM0MKqleakiNE/PvY2oIdxRVFLKDMCCwBWIVjGm3LmehxWz1WM0gI9RUWKmDpFXUBa8SNuox1sBj6lcljzNup687pVSixokBSv4so16FPLCnUWoHLTPoMBuU736YuZHLDSJ6fzwQ4lw+j/l9GqKSCp5gGsIA19U33wMpPAH63OOhUCyks4txRDTq0wyStFkjUJmSpETM6T+dsVfEXhlatGlUD6WSmBtKwsX5fCCZOK/EuBgLWry4Ohqu9rsYt0IBIOLy5R6GUQiagY63RBpLKRymbiLnmAelhxL3ZAVO1rcy5vmaJpuy7MrxI5gxyibiOWGDw0RFRTMlqLCe1QL9Yc4CcRI8wkqFGomAdgZtBuux+vvglwTMMrEKLErq57VEYfiBfGMNhKFo8ScxYUx/pH5Y849SL6UX0+dVFOYuForraLcyVjppGItcil/2/kMCj4qps9FmSqoptVJgyftFRRGogSIM+4wdICSU6uCQEyV8lSamKXl6Cv7t0ABRliNJF9+ZxJ4Seo1HOO7aqgWXJ39BbVGwMw47TgfT8U5QketlO/qpt2/hB98XPBnEKQObBq01DhtIZwNQLObA325d8OdpZIA8QSz4z4OlKSEgAn1Lbf4QwPMTEj4uxwv8AhvMOmZpPTXXUDjQDza8AzYX5/lhz8cJCOFICE2YEWkH03F19QMi94wmeGATmKSgAkvawN78jzthGEJOqyvbRdX8P8dzC5jyM5oNVwTRem0qWm6ED4TvO0g84Bx74tcCtllGwVyP+0tSK25C5H+3AfitPQlGroFHy69NkmNTX9W+wFhF4k9cFfHNEftGXKmZpuN52dL/j+GK67YQ4YykPxhOlIBgFjPK+kYWiQYHKAD+hsN8dSp0Q2WeSQysSpE2JWNtmvFj78sc04vAqtfVuSVESTJ9oE2xzm1CXlvBPqiLo1/iPDJlmIXVBUkCxhVIPzBB/nhc8KJNVoGwv9cNH+I5IpZUhbGmomTyUR+DASf4cLnhGPNqEWGg8++Kqw8RU2GPiCm4uR5jfICPYfTBnhni8ZailEqwX0w5ImSZv/wDaB1bXgnmZFfxHwRhFXUNLIGEyJ1LMCbEjpM/XCvxBj5Ykz6hHyB/kfwwFNwIsm1AQTK6pmeNfZsPMBqlgACojYKSuqzBrMJ5gAgxgdnfFLsSiumlJ1PJCkEhSpci5JkTYERYEDEv+HGa15fU9LzBSYqswfU5JkiJPpKqCJ3bC5/iSlNMzopQECKSFsNZ1Fjp+60EWxUaRa0OlTCrLi2E3+BOJU69atSVFNGnSAQOd19IkmDsAB8yOWCHEQlHWEBSoyAAFzNgSIYiwVTz5sNjGOff4e8JTM1aiPVqUYpyjU2gzqURsdQ9WwucNb5Sq1Wrl60nNqiaXJEVKZIDHaFY7HeTa+kNhrZcyd0okNqK5R4p6afl1aflk6YPpcsygksIliVlomTIkwDgflky+isajlkqPZApS6hQJE+kEQYKi6g+9U5SvTRVek0oSKcszSATAJOzKAZN/hF+WBOb4rVOn7NvLadIUDciZJtB2J1RttiKvWc20X610Ra6Ja8TalqAxp3ibkgMSCdxtG1jinm0rKihyQpUtp1CeoJAuLbA/hi5xKsKgCEiAZkHlHU2HvjTM8RJo1KSUwqFtTNu1iOewEjCqJOW4jkj4IA1M9CceYINXQWOqecY8wyQmS7guivlS1RRVCg6tXpYnTpBVdwSfiFiFjWYk3x5TrVEJVQqKy/8AVYwGlgNP2YLGQBF4NSROonBKnwnRLyuwEhQAoE7QNoI+7YTO5OKOdU5jL04p1FmpoOtQYJJQOAriWBNiJA1HYY8s17XEDbTy9OvlddzSFfq0SjU/tQiBQo1H1agdJbU+5aQdQ3iYviFFHnesl1ZgyI1IKABIJ1NJFTXE/DsbCxDJw/KKaXlguacHS/maydUeqW9W5OxI36DFUsS2kuzMV1ERKte4gAgCwjcibdTG2vJI689Pe6ZkEKlnEXzKQ9YbWfi1BmkazILrb0nYRJGxGJfEFJhmMkaj6vs6xFjJ9KbiTeeQA52PMjm8nqsFDBS0gsZOoEstgxiSP4TBEXAGA3iOua9bJlXUE+eobT8IimBqBi8DnGOr2NUzVI5JGJbDZTLxFm/yulYAeat9RJ3PUfzwECmB7YY86y/5cg1Bj5q9JuenLCPxHiTAaQBp2EAyZuPx/PHfet4Og6qYG2qYeLk/s1cGQWyoOxuFkLtaNzJ6d8WXpj9npRDLZWJBNtMbEXIJvygHCNU8Q1yCdZARCDIgxAIHfYHuCOuGHgWYFXJhxVCqtU3N59IAtYySRbqMT4p5cyOaOpghRbnzSeHmkvj1BRXc9STMWuT8o/Lbliz4YF3gGPQTP/n0h07/AKsMVeNIUqlXca0kQuygXi9pNzAFo5AnF3wu16gsbU/l9vR7D2npgqP6Qucf1Qmlljy/+wfljbiGTQ1MutRFcebmQVfS0QtGx6EGbH+eN6g/d/8AaPyxrmR5lagdTH7bMSTE2p0L856X6DFFPdHV2UWc8O5TUR5SgaFMKStyzC2mOUfTHnhTwtQrvmVYMPIZwml7+l3AnVIIgDfpgk1FiTcGEXdf9bdCMXfAFQ6s3ZJ11pOxP2je59pxufCljVJHFqxFCpRa1SkQuudwGt9AB9B3ws8NpsHUAweRki9xvFrjpzww+NqP2rDTpPpJkixi4BHePxwF4WsZhA3UG0d+u/S5wnDaA8VqqjGcTNCmHd9QVhYurQA0SSQCBMfXvgxmc3nGrUnzdJFlD5bUx8Y1KTMMZgx03wV4plQuVDSSWrgk6TeKxWQRbblifxPmNeZoC8KlTcEb1F646FQWS6Lrqpls6opvRYTql1uBJWAQCdiJBn3xzvitOoaheoDBMf8Ab2jkBO3bDrxbLTlfMUkOlWx9ws9um+EbN5p3qXa8CTNiYF7n+3tjkt/8jiFRU0gon4y4tTrUcsiVAzUwoZdLiIpoNzZhIiRgb4RX1VTygATtczv2jB7x1w2itDKNTpqjMq62VQC00kMmN7yfniHwVVojJ1xUNPV5sqHAmPLPwzsJj54tfJcZU1GM1kzeIwDw+kTJXylANrEWgidrEfq3LeI/uwREE7fLD3xvNGlTbLmfKqUVelBFgwGoWn0kyfnhHz4OjTGxnbtuelgMTURE+aqrQU6eAuM0qOWCPWpUyahYhgxPO5jeYEfLBriWXp5qg9cFKk1HvoswU8p9QOkQIP3RPLA3wN4bytfJo9WmC71HXXJm2qI5dOXLG+WzNOhTbI1DelUd0cRt6pgHZhvHf61Y3P8ATtjl9lFhsven1S94D4vSytaq9QmGosiwpMkspG0xtM9sHc74tonPU8wHqMq09LEIA28wA1iIvJwH8H06b5iuHQEeU5AqCTMqOex3v3wwU+FZZnZlpaWWoVMMY+Go3pjYWX6HFFGoRTlC+kHPhTVPFlLM6KKCtq8wuC6oB98/dvN8CfEGVzDU3IIKxGgbRIudj9MMVGgoyeWqafUXJLczIqHfngJn+MAVQjfu9J1QAb7jEnaNYMgXnW38qvAYN+IBay0JKzfDmrVhTVCmo7WiORtyi2CWW4DlzFL1u2qC4YASOVxBA/liwvEdLsFmdgxvHaecYp1205dvTcwQ3zMxjmPrVXHw2Xdpdm0KDTn8R1V5cllKUoamog3IE/ImLnHmFHUOsYzCzhnG5eUbMaxrQAPn/S6ZVzQzLJIrUmQ6g5pNpkMBpOqQ0xI1QbfxAY8q5ZlpOFJqaG1FFZkt90QJSpFhpFzeDMYzg3ERVpatR9Ahm0wQdCkrpj1eqbxACG8YptxtAdSVaqwxDVAQbIwBltM3AsCp1QbC8ctrHh2Vo02/3EqQ5SJKZODpNCifLCkhSQF0+ojUbWKzeZBs2xGLuWYBgCW9J1Roc/ERAVhMgMTAA2MbBpEcJpnSssGgenT6RAlRABMgBis84J5jE6Z51empAKsrkzMgBQLamMXmdPa2IajCXOA5/wApg/SEdydEa2sQSQYLWBGm8RbpI3HO+FbxOyh8rErBrQsbStLvyt/bBWhxEGPWmprKWABYG9pMmD0tcWwJ8SaadbJkVCQDVu0GPTRHKLxG+Or2FTIrOJ4KbF/pTTmWjhNOf/m0x7Sy4574iRtRk0wGbUYXnPMkxJFyOX5vvFKmrhQZWBXz6Ucz+8TmDH0EYXcxlEqKAw3EHvfHoKwkLeCqimCOKRs83pfTCrYQPiJAgE8gI5C23XDv4EdmyL+kGKkwwiSANNhYjb3iPabPcCy7UfSgUojvq3ZtClgCfYRtgVxrhNejSpVaBOlqYLBTBGq4sImx9xG9pxG/M8AOEXWYiu1wJb7ddXSzna/m1qjz8TMYJg7ki3I7cuZwU8NC7sBypkm//wBRR/P+WANE/aQ66Z3EERHUfrfB3gpAeqL7U/8A+ih/TFLLQFzQLgpwqN+7/wC0fljzM1DrypCgTUzA3iTooydjy/LEdRv3f/aMZWqgNlPVc1cwTbqlMRbeY/HD2GxTKuo9VeZnDExcKvwt/qbrGK/hOdfER/Eagsbr9o9z/YnEr1PWxvZQPhP8TdsZ4DqA5jPzEaqkAmN6rDbcfPBNMIHXSTx9awYrX1F13J/CCNwb374o8HqxUViNjIk/13269cFvG2Y1ZuoFMwNNz0t/xgTkKYsouxBBE2M2/tiWm6WXR6VBHEIxV4y8QSADAgbGT0j+K8fnOM4bxipqVS2vQdImOZEweW22KlfhlQBSy2EjkRA9K2FiZJM7zgxwjwyaVWiKh+IM8GQYBC3GwOozHbnOCaHO0C79TFMaBmiOHXVirnHeILTotSKyXMhuQ5XHMXB+Xzwg1IknoL8v18sdG40VbIVC0ErUgW7Dn0jlP1xzlaZJg/Mn/nY/ywppGdx5rz1SZTT/AIgKPJycTdF5mP3VPuQMAPBmTNas1FYBaL9AJJJ7AYO/4h6RQyRGq6LILE38qn1/lgL/AIc5taed9R+NGXpex+W0fPHQIBqeylYS24TJ/iHVpxR8tw3lgqCDcRAhu9vxJwE8O1dFVm1hQacFiIvK8yYG25t+GCHjrg1OkFqBtLVIOjpaSRImJ25DADK1AgLKbmAZm8sOYBMRc7bcsR4ZwERxKrqAmZTzwjNBjTUAaWOpNJIvvEAgk85jl7YWPGR+2cEEEO0m55zvz+fXBHhJc1tQMi0FTYQpjpG5t+GBPGPVWdndihc6oPq5mBPM9T17YvxD5pDz/hRNbFQ+S98HFBVrGrMGk0wbySI/GPrgvwmkGz6qYcaHkEAjlBI2mMBOGvT16KSssp6iWksZX0wIAH65xglwsuM2KjTpCsCxFpPKdp+eDwxGUEoKp8UI7xnMOieUtJFliqsBYSW3sIsTbthTrhaTHzW1QLMvaLbXtaD1w0+IVmlLAatTRNj6RUIA52IGE5FVtJAcFR6pNyTGwPPHHxjKn1EvvPDbry9F6Tsyo04IxYiZ/Kmplar010k06QkgCBG/zJxBxvOeeQQNKAyFF7RznFjKvSopU1MSRIHKTf57csecMyIqq1UvAGygb8vzxEcrDmvA/lWNdnp5DEnYbBCsvnEj1KJnoMZgVxGjoqMokhSROPMXZAbglcsYx7BlgW5LrK8HWoinRpIBdStoIEg+0wMcy44cypNGq5KmDED1CSQZgEmZubyL7Y6uvG1pZfWw9GnSSOQZgNux/nhK8QZmlWp04YMZAIAIiQNp+8IPYaupwIEPHhtbZJqO2lBcj4hzFKn5dMASIJYlpjYBWMLa0C0Ya/BVZ6tLXVYvptcSSSTcyeS6gIA+M3wkMoF57WOHbwCjGm0TAKk/Vh/bBjC0XyHDXrVCKzgYBTDlQlLywmoQPvAmwgbwSbN+OBPGrnKeqIep6isxal/GIJtzwy8QoOPIuWhGIEfCJp2674XuOUyXywgH7Spa3MUutu+KadNlOzQhc4uF0zZs6eDBDJIq0r6SAYeneR6QfngTTNh8/wAzhh4yB/k50iAK1KP/AMlPC/TWy/rmcaeU2iLIh/0akr/0KsGTzpnlz9+U98W8mGfLoqgElFB6fBaTFv7xzx7ksuTTOpWK6GUFRch10mPqTP8Ap6Yny2dULTVKdTSEDA3+ACAxjYnob3mOeOLiMRDS1okygAuUqp/h+Xd3zWYALEBfKXoPvFl7WA+uDHD/AA1lKOtVV2qBV1ameWAZXB0KAd0Xt6YnfElbPO+XL08u7S48kHfeQ8Fpu+2rtyx7kM4GrLppVTXVAMxNoWCR8RAgvtomRO++IzXxBBcXabDaI14cPOy3DJCnzFHJEIQ2lSQoYMSAeQJMgE7e8Dngbm/DirXp1FrJpph9QqEgy8BTYRE9Y+eJ8nxFFoZioErJQDsVY0z6WklyAZZoqSbrA25Ys5fPFmpWqLXdBrQoZK3JNxYBrAzF+ZIwxuLxFM6mOd9p4bb8CiIa7VUcxTdXMgj0i8Wsz89jip4Hac1xBYMipUuOf2zW74MPxSjU0UiKlYFzTkgn1ourcADVy/4OK/hfgL08zmmYTScGpSutiz64A+6bx8h3x2MLje8EOGU/f3SajOC5nxmPPqn1EFmI1fFBkie8GeXLbEeSY6gbA+xtvHvOLfi6uGzdSB6WjcGR6eh7R/LA7h/7xBIALATM2Nrntv8A2w+lOUEpLzdMz1y1JZIkEH/3BQPYRhv4vTIzOXKoQvlMJAt+8WASBExhdy2TGV1B2D1CO+nTMyCwgExMnaCLc7h46GeFYszSWJafhjYEGwMxNjHacFV7QDfC1sjrRap03HxON1Pnk1cOqbRrPLaNF59pHzxzmrIYkbX3/lymMdCz2ZVsjVCG/mk7i/wSLCBO/wAh1tzuoOf49v1+WI6L8xc7iU6pqmvxfkHrZbKeUC7pTXUoa4GimAdLN+QxznMakYzKsp52ggzsdoP5Y6TwXJVM0UpoHVSoXzAjELMXMWi3M35EXjovCOA5XLrrX1VfLg1WVjb4gQGJ0rJNhvESYwqp2iWEyJPJY2jN1yriHB87mKgdaVVhpU6iulTCqBpLQG9hvyxC/hXNoAf2WofTJAKEGOW/x89PxdrY6xXzgAf1lClIDWyn7MmLGbeaxKmDyH1H/wCeAtp0+UDSM66bg0egaRp1P9bHriNvaNbZoj1668pc6g07rmNDNVaaEGkaXqBh1ZWIFvTquQAPe3cYoZtFOqA081meYnla53vM98daq8UpuIqpSbUp9BYSIF1IdBdhcdY5Wwh+IfDK0x+05RwaaqNVMVi7idypi6wQbkm5+XRodoB4yuEHa9lI/DltwguSzXlMTtAMiL3IHqMfDb68sSZ3jbV2ANoUfCDeN+pkmb23wL4Uy+YFYsaZnUAbkAGLbE8vni82SVqmhGYgqTCzcqqlhA5BiRqIi3LFgffLCQQYuitCs1ekrM5NNWgKdIuQSBEn6GQZg74gzZPluulVliTJ+GCT6GFmGwsduuAwLqullOm+4/hkHSe0m/44v5XiAKfBri0kjYgKoiCdNyNz7Wwuq5xI32uUX7QG+qsDKg0zCgrUEeY25i9p+E9Lch1wAavVy7EAQYEBvu3Dfyw7cRolqRIRlNRB5K22nQzPzBnsDcWwvVsmoQ+Yh129Tk9PikxIMe98IY11y4a6BUtrgNblkG4J89Ev5gFmLSL4zFisFQ6SCDzscZinK4JOcFdF8RUycg4G4Cn6OMc0LR7/AKtjq7Z/KVadTL64kEEzBEQSL2nlHL5YXszwzhbstNKrI5I9QfVETI9XpFuccsTfWMmMrvZWVaRJkEe6TKb2lhbrPP8AX5DDv4BqnQ4hthJGr/UdxboYPTtirW8M5D7udImIDaeZA6CZ5bRIw68ETK0qZGWZQoux16pmbkme56b4VV7RbTbLWuPoQtUqDi65Cs1Z10yuvV5bCNTH71OdjbbAjjPCMwTlytOoTra4UtAIS5A9ud7YvjxBTau2XUFay2gixHM26C8x+NsFW4nSpuEYrqbbUd43gHniN/atdhju9b8bKkUGOE5lrxTLFeENM6hVpgySP+pT3BO+KPDsurFQ7aQAZPzON+M+IMtTp/aEFSVOkEtMHUCRN4In5YLJmiyK9N1hgGg7wRP5H64Ye03vZdhE77ShLAwQDJQvOcVooyrUrMihHDIYuF9IMgelTqmesCxnFHhPE6KtQUvmHq1wZZkYSqA6fTACrcDUBee+CbGtVVkNWlpqZcQSplSP9M3B1C0iNPOcCxxOuDlKxNH1E0DBJ06mCSOXxKDHyxEYeCIuZm44Ejbj9gkXBk9adeq8Xi+WVK8V6mil+7N4VrkgNHrgkCGmB9ceHiVKMtVp5ti9fQKlg0qJnSgHoKmRPKTqmLW3yVZqeZyeuiQys/mEb+azwCl5YR8U8ha2K+bz2YNLK5zRQ1U2gpruA/2WoMBAiZ09OdowLe7JteTGovLbbfuInzuVhzdTa/nsFfoZ/LirXoGudKKpiQChYtqBaI3AMRbX0jAROJllfNjMhmpu1KmirIqJ5ijYXZ2tBW21jtgm9eqM3UoEUT+0oW1CfSEUIVcEeuZkbfexUz75kUtFMUYyRRtbGA+hJOkfdYgn4j87zgaIbPnlN40Njtubcd0bp+/H0/KnpV8u71lWpV0U4rMCCGpO0mTYWEatJH3r2ti9wPiistMp5tR2VC9jtUJBMAem8ntEdMD8pmMy7ay9FTmkkAgymkQGIB9YIIMcpidsZwrPVFWh9tSAZTThRt5YJkGbgxBXlI74c4EHmI3HAztxB9ljdOvRI3jPIVEzVRmRhTqGUdyIcW2ae+2BWUQ+YoMRIEqZgna8xI6CYg46L4nyn7blIDO9ZQrrTRZ9TBZEb8ze0c8J1PwpnKTiaMupDmmHXWoBESsyJ5R+GO5g6jqtLS4spKzA1yLeKMyujVpkxG5EFJ2IjUDc9ZJidsBxVnyzqG50lmDKLGZ+851cyefKYw28T8PvWZz+0UvNlAaTk3kAaWe66hEwfURc4G0eAJUzSI+ZyjkLEU1YGzTZVX1EDa4NxhjcITK2XieS0z7AcOpaAFDOxaAIYqdFyQLxHyA3g4V0p6mFMRJaJJgSSBcmwvvbljplXwpXqUvJSrQCqTpDMQzKI9ULq0KsESb2Pzl8GeCVoZgVjmKL6VPpNNo9UqGBJuJBhhuJ2m0zmupUz5rAMzk0cE4QuRywRQNQAaqwc30gamvyiwtzG2+MzGZYC6DV6VA8wfvCQVHsoIk99m3x5nc0Qwj9n0nUegOmmOcHadumF3OZio1KqIy0Ll0gBtnedjEarbg2JEHHnXU8zp1vr6+auaYCInOF1qI62DrTX7WdVU6ZebQskRtv8IxSzCMysSWJgU301RLVRph1kQAJnkL3FrDc9ltAzq+VlQyUqajSx3hpYSJDGPiIB9K3O4gzuXekav2eVIXLANFVruAfUJEF7fGYO18MFNs2I6A59WRZjCspWqS4ZqoeFWo2ql+99JRxyi/ttJBBwQGYZATqr/eMKqGLS3wi/qk95O++EnN5IqX1ZWk+nKhnPnksTeH5Fqi6TffodsFsrlHUKP2eCppEk5o7vIc7xcWPcz3xQ+k0AGR/8/noQga6dvugXjjgnk1GrolQUaoJaStqvqO3IRJFtxY3xS8HZ2o2booosNcBBeGHUkWstyfxjDxUyZzNGpRektPWulS9UPBvDCGJDb/+k4VqfhkUXqVUqEAK4CgbWsCS51AEQQRBmDIx1uz6oc3xajrZSYhkG26s5zwmilalSqw8yoykupAtrJeTPxR7g7A4VM3TKOADEzpJnUsb7WBMSPzGDFHjFWqqCrmXZQ8+WVWASrXkRzY/jbE+YqUirAmZ3IG3Kb8h+ueLnUQXS0pbaDourgzbUwG1JVJJnSDpm7HSvICReMU8rnJRqzVFb02VmF2ZwZIYAAHYTc9rQOo0dI0Uq1MhwFebDcGAb7yffGUhTpqlJg5E+a8wpYXAVRqnSDNsJZTaTmaOvVS3bYoJxgzVYl0JN9hbtaB9MZiDNMKjFwhE7gXx5iiRwTBYQjvCMsjVkSpdXnWJI5E78pMXt+OBFehpeBB3G9ul77dzgxwuoUqNUkhgpCiLksChGx+6xI7x3xTOVYkABte8EQQN5vE8t+ZwufEZKJ3NUs1T0puJkgi31P6jG+RRyAoNt7GCT1+n88V6zGCTvJseXM43oGANQsRYTsD97pF/ww2y1eLKXzX16ldi7W3Km9tM/hvjTOFxUIdiWWd55i8fniBipPqGqYk3sNuR5bfLDHl8mhBasX1TCi1hIN5F7fg3Y4U9zWiSnU6b6hhqpcDywqVqS6XqoWXWqgyFB9QMbKOvcc4x0rMpl6ZRFoVgquAdJqGxDzpgk+mVJjZW9xhLymnK5g1MrqSoAdWsHRoMGOvIX7e+CNfxTmjLJp1BiSsEzYDSD3sbfkcRYjNU/TpHGP4KoZhapm0wr2WbKg0ENHMNUNSFgvLU5YyIIHllRJi50m1rQZ/LZJlrnyKyaWK0VAqadQXZFnTqLex54D1vE+fZqDhIanKqQPikRedrSd+/TENLinEGorpurVtSvAkOfVz5c7jlvhXcvzZ80f8AtzJ4dSUGU6R8Jsfh1Bq1BQMwlTSBXXXV8yoNJt8U2a5I5DvijkRkFq5pXSs2WpxpVjUNNGvrt/ECRvJwIzPHM8uZWsdIcjywpETq3me43mLT1xTyfiPNfbKACcw2k8hqaFtO8gi5tGBGHqZSC7Yb7ze8bbHhZE5hBuOuvyi2eXLChln/APEmuXXTPmB3TVBA/wBkQV3jvgxRqZNs1UQJVWm1L10zrALSbkNedJuThXrcfztTyDoXVQcqpgGWCkEbxGkEW57HbG1LjeeFV6kpqqBVPRDYCwMnkJuJ9sadh3FsE8f3c7bbbcNFjNbDhsj3+U5V6dJl/amY1NNPUzglZMqJA+5f/b7zcrcKyiCrV/ZW0rURFWT6WBUNYmQDzmx+Ywq5PiHEAaAClgkaFHPUpA1HsPzGNP2ziFTWRr+LzSAI+Eja14tbtgTSqA3fbz5+XAfdN7sgfoPtyXR0Pl1GC5ZlAJiYKjToFhJgAExA2Ntrc18RNVoZysoYqQYOmoxkEAxMglYOx5HDTwls3UM1KoF4ECJJI6zKxG3t1wM4jwSlqdqjOajSweZ3jTN4Nt7bH2xrC1u7eQ4yeUnrmmVME+o0ECPhB6fA61VQ61FsoCq1iNzH1n54io8JzCKzIW2IbQTMGLEDcHpz0npht4fkq2h9YG0QVmTDECYNhBM9F2NsQ1OHGnSZjUb0qG9J2FwSQTJmxt1v1xccWwfuV3+Pw2UC87wd1L4YdxlXFSqQ06EBEyizqJJYHSLwo30jlghk/HlXK6qZAcVGLamkmCNIgkiwgczscLdPL1qlU6GT0rbzJsSAREDmRb54o5nhVV68VKlJG1QbMe0BdN7cjGEuDC/NP3XNrYQtf/2pPWqes547hNa1KbWjSqxBZYj4rEafpPLATNeM6pU6UpDXSVAdoCzt8+XbAbL+GVJWMxTL8lXzJ+mid+mKfEVSkXpwGZTHqUwb33uY6EC/WMIZh8OXWElBTfUktLTPXFEc541ap5xejSBq01pyEuumdp2F/lA6Y0TxRTJZf2agNSBQTYIRPqFrEyL727nC3XzrHVFOlczPljpFp2/vjF4o6tr8qh0g0VK3jltNt97nrir6NsWHygNR4KYa3iek5JfKU2+x8q5k25g8vffvizleIU6otkWeURJVudM6t5HK085jG3hLL5iuqVBl8q1ItUDn9lkqRcQQDIJMRyAw3DhpEL+yUyJm2XgT7HnH5YjqVqdJ2Ug+jikOxJFoQ3hVWmCHp5I0wSDd45yDGqbAkR8sT8VrSKraQNStZeoXp3j8sXzw9otk0Puij88bpQeZbJLJ/wDLHvv8saZjqTJLWmebvylvxBdYj4XGaWVzFgKVQzz0N/T88TVspmTA8mrp5fZtz+XQbY681ZVmcnSA5/a0B2/h64h/zVALZVCIJs6Hb2p4P/Kvdoz5TGGtUnK0nyBSV4cyrFScwmlVJCgoQxtdjOwAIE857YqLTmpWcXUKFtqBubKokQDe/IThi4/XI0KE8tX1AgnUCbEfDpEcojCjkTVc5kVPUA2tiSQJB56bfL3x0sK8uGcADlz5qd4N5F1DT4fUYsVplhqIlZj5RjMDW4tWLOyBVDMTARIE+4nGYrkdf2mZI/v/AEnCvnUp+XAhmWWOq8i4273B98EKmZpMJ8tablQSY3HMTvAgWwm5fNqABBFSCJUkgjeWH3dztYzt13zHEpccwBa/MxIJv6bbWxCaWYBpXSrV2Pnw66pgyminUaKlNQ1pK79ZaLi8weo6EnXM0QaFUzTqMvoUoJhdQiD3HLkLdcUFem9N9SaWMFYiBE3tYg8yZ2A6Yl4XnV0MAhYJuBB9JOoNcTIa55bbWxosvIMwnUsRYMDRBjX5RzL0Up6khDSNivcATLD71pBtikeG04MGaWkb6id55AGD/PAylx2A0UwFmI6gctvp/TBPIcdWqClUkAiAQd7GRa4W9uYjC6gfE+Sae6BMbC3464qq2RoFSC5RdIGkmdUAWBAle0ybRi5RyBejY7KpBCwDuB7m3L+eKGdzCIsxqXYBRy6nqZkb4vcM46dVNQAIPwyIIUGIO3/AwDqlRoMXSO9ZVAIGhHJa1Vem7aXJgXVgJEi5JFh6r7bHFfIPUDVGkEhoCyZEzcMBBMjYqQY6775nihVmV29DAFiti8ESD0sDYcz9BVfM0y+uIUmdIkACDFhBtsY742wgi4smVHtPhJ3uqHEeKFmR2pFVEgDVvBaZIWZluUfjiuePVNIQBAAVIGnmsRee0YzMqG0g8iQD1vN/riHPU9SjSB6YAAG89ep/pixgYIEKBznCbq5lfE9akIUJ8eu6k3sOvYYucK8Q5l63nJSpM9ECpph/UFhdgxJuQY29I2AjAfLcNVtSM+iqBKyJVrXWeTDqJG/TB3geTWjMM4qMI1AxAEMRGxkgSDMgYGqaYaRCdRDpzEwOKZuEcUerp0oGKprcH7s2YMbSRO9yLYrcT44EfQlT1CE1AGDBibCCCbkc+3OMcFbWKhzLBCSw8ohd9IINtyQJBn4RinnaIWpr6eoCxBBuGjpva15xCxlNz5XS+rexke/smWoawQaCWZEFSYOm5YGJsQFAY++F/wDzwz6VB5uRIFzNhy9974vcCz5qB6IrgFiYDAhVAkgTdVB2IE7nFR/DxptVFaspa50oCCCQTAlQoBmDCnYRFxjdEND3NOuvMoTinVCCzThKLr4kymgBaVYkxq+0YaTuApJIPSSPbFvg/iLIKdL0IO4Z3JYxNiygGOlo6xGF5+F5WLO+oq0qxnSRHqlQIi4gzMfLEFHK0qLIwJdgYKssyTAsAQIvvJjucaOGouYW+LfcrXfMsYN9/wAea6Jw/wAQcP0jTIn7ioYHVgGEfOCcV6nFci9QF8vCwWDeWjEkkXmNQPPY+4wptmaSyVEBbkCIm/Trv2GKGf4iNCqLElpI5zt8tMRib/HNa43Pv+E1r6BE3663TzU4pwtyBVIFRJJ82jLS0SA0KIn674G18rw2qD9tCtEnT6QRq02Tb1bjY29sLeZyKH06yIAAEAkttMiJFh8gMW3y9O2h1VyBIAhdxLaRYcvTHPBDCMb+h7uvRayCTnEeoK8Hhygpc1cwABdfLS1Qf6JIvdTpiIJvaceVvDuSqOVFeuqW0g01LzcXIOkjbYc+W+Ns0KSuq1HMjZgbb85mBI6csRZ7iaAKtH4lF3IvuL9O9o7YeO8f+lxB65JLPpi7IWmeO3vO6KcDpZPLhsuXzNRSSZVFhTENO7ciLC28ncVs3xHLMtOiGr6QQNxICmBa8k9YMH2xVy/ESiroF2tUm+pjA0j88WKmRpydVKVEgMQRpG0yNz3+nfHYaDnMnyO/lCZVoUGRAHrCv0OI5MsVUVKaKoACOxY6dk0sxA53tv8ALFUPl65YIayvYBWZYgkerUATccjH0mK/EQlR3bUUcCxEEOFgX76efcdMFclRWkrsp8ywuwBgjUSQQAdMMQLcu+EFtKmZM7blLptaZFNvi9OoVMMEa50aZAi0qD9T/PpiWhxBJmmG9R08oEXjfYk/UYr5qqxUgoPLdSNen1kQIIJ+G1+knrOLeYymV8uklNTTMQYaS7GCr33Ijt8R3AEmGt3ueG0fCrqV3U5bvE+fO3kqWYpVcxUlQRBgE/CZMbiwgcoMgnfC14hqPTD01YNqILwZ22XvtM9sMuWdaLNo1MKSyzMebekAKNupIvGF18+6mqyEq7QZGwBEH1H4TNvrGOrRaALLzGKqNfWL2i0pcWoVtMdsZgzlqVSoupVZupAm/c9efzxmNF/H7rXoqv8Ak9UfdH54hq8Mq/wn5YdtHIRjw0esHEX1rhsFOMS/cBL7Iq0lpgVWcqJlVgMdwCYIG+K2TyLrNT1DSLxEj6mQO4GGc0+wx6cuDyGNfW8kQxRGyVXqgiQCpO8djy9xfEVDiHlnXpDadgQdzzsRe344bWyQ6D6YibhSHdQcMGNbNwmHG5tQgVTMq5Vi4VDNwhBt2LEneP640z70ZDU3qnqSoH0MCcG34JTn4B3sP0PlitV4Ap2tjf1VIrBiWoNRqKzjzASp3gib7fKYxbztSmq6FB0g+mdx79R/TFo+H+U41qcCqWvb3ON99SO6a3GACFV4jTpUqSkktUedJX4IEfXfpgSjWkcsG34C5iRtt2/X9MRJwauCIEjoTY4NlWnH6lt2IY42Q/Kba5U3+E8/cc+s4tPnf4SQOU+0ETz/ALY3q8Hqz8JP058un0xtT4NUESp39WCc+mbysFcREqfh3EkpBtdWoSwB0BfSDveTMjsB2JxHn+IggAXm8ne2w/P64qf5LmLAr6RtAH1Mb/PFgcFqc1J9uuBPdTMhH9QNJVvhPFglNlQlHgXgQ17/AIcjiwvENSiTYGYYggx8SzNgb2PY4CHg1YEkI0dxfGyZCuCAKbDvf8cF4DuEdHFCmTdGMzmk1MUAKkaiCCCDAEGOUwZ2t1wP/aGQSykcgRyvP8sRfsdUb0yb7kH6RsR2x7WNUgDyQOrLIJ5CADpHT4cC1jQLFN79sEgohwuuhVwTDEQAYANvwNrj6dsBWkIKpWcGWBuukchI+I3Ha+KmZrzTX7GGAN0Ui/KZt3t05YG/tVUyCtjyKxHcGxB7zjYpkmUoVhED3RdOJgRqsd5mQOXv0OCacSTyiHQeYtkZQJIMRPUTb5bWwr0MyadRnNJHm2lwTHtGxxa/ajqDeWFAuAWJXaBuJjsOg6DGOohYcQ/SbInnM2HTUPhNiwElR6iJ7mT3IBxRyys6kBSWB+JRytE8iCRt2xUTPN5cN5hb7st6PkvL5f2xTbO1UHpdgpvCsQLdQN8GynFkxlQBwd9kWp51kMmdSTpm8fL3gTi9mPElRh5b+gSNXLaOp5xznC+uddgZA1fxT8oI3Jx5ml001aFYuDJkkrB6cjEEE98MDbiUuuQ909BNObDaAWR1VhKyZge8TccjFjyxPT4voVtiG3vsSLj9csJHDUbVZSZ57bSbH2n6YsVMwVMCYgAzzP5YVWoB5hHQqmm7N6Jw81n1UGb4gI0mC0XgjY8re+KnDc9pqNTqgBRBBMn1CAPaR/8Ar1wv5bOqKisQ0QR6XIZCY9QIi/bp7YJZlzUu9QFTtVKkMdrMQPUAPc4Q6jaDujrO70kjoI1xLO+kgkm4DQ5ltMwD0g7gXuDhYzytogufUSGQGw2O3Xv2xdyebAZKKM7ICdRKEAzc/ETFhtA23OLteqBqp06cHUtR4uANNlHYSfrimmS0ZdbLnOa1hBUPBOKmnT0o50yT8HsD1m43/DGYq5x8wajxTqRNoojaBHLGYZlYbkD4Wd3UNxPuU4mtTAgKfmcRGoDsowereFWXmCY/r/b649o+GKnRZ9/5jHlu/pcVFCDU1kfCs4nTKH/T13wTHhat0W3+oY3bwvWjYH/cMZ39P/ksylCTlu4+uNaVAC5j64LHwvWNoH/qGMfwvXAHpH/q/V8aFRh/cFkFCGVen44xaYPLBb/4drc0+pGPF4JWEjQPflgmuYTdy1BQunREmAcbil0GL6cCq8xfsf1yxq3BaovpPyxvvGcflZBQ6pT5Y3qUxtGLFThtQMPScaVMjUmdJ+neMaDxGq1CqpSHfEhQRad8bnJ1YkofptyxhoVANjHfG2uvqshaIg6HGQD7490VOUn3x6FqTcfUYMXGq1C1p9CcaN7g43qq9jA+n654jAYiYmegxiyFsiA43CAWIGIXa+wBxMATyg42shaFOwOPAincDG9JGJ0gEk4t0Mi0SzaQdgIJONBPoYWrXMU2kof+zAmNAJPbFgcIBmdAt8LWP0xdCFSURgzMwW9tPvinVzGlBSgBwW+0uSbwdM3jBNkmAf64r0OD7AzMzVyQeA+6ovkKc+pFnnIxqeE0YP2a/rti7wnMl3AZCRqhmG5H8ji/xDzCRFNSk6b7nvNo6fLBS4OiT7pTv+nq4nxjl/HugyeHqbiRTXSOZIAPbviOp4VpgHUii0wXEkb2AN8Fc5mkAVVgaQRqa/qtcDbrivQy4ayqGAb1sGKiN4vgg94N3EKml2G3KA97g4jlHQQh/DNFgQARPe++IKnhRCbFp+eDlXMhzKrHXsRjKTEg2MDckgR85nDe9qf8ivPOpV2VzQkyDH9BLFTweNQAZgTYW74Yf8vpUUCmmHRDpGp9RJkGY2F5O2J1pGb+lRcNqBETP58sUc7VEs0EafUCD/WwOCdVqGxcvR9kYdw7w1GnlIU75lQW+FgTJEW3vuPTvucR13Wr8NMgPaVsXCnmeY3GKXBrJUrHY+oybk7bbQCbY1r50G9MaVA3mB7d8YMzDDSuqzD4d1MAsbfr7o2+XMn7R1HIaS34gib4zAympImmzFeZZgLxf5YzAgW0VXqmccVqHnPfEw4o5+8BGLb8DpEwHIF9z02/XfED8EogmK4+YP67Y4+ajw+F84stDxlhsx9v1vjU8aqCwO/6nGmdyKCdNYNfpfEGTyqTNSowtaFNhzvtNvxwQawiYWWRFOM1BuR+vbGLx9+YJ6YGNSpA2qke494/ljRvJm1YYw0qew+CtI3R8REb0x7nEn/xKoF0t+v54BeUhj7dL/rf9b4ujKUmB+2Fog9OuNdzTA3+ViLN4kp2HlwO1sar4goTPlsT3/5wLGUpSR5o23x6chTO1entsSJ/P9TgO7p81mZEzx/LlgwUz0I9vyxu3iGiDsTPS2++Fw8MqByQFK9Qe1+3P8MRHhtYljpMC34/8YLuKRGvytSmN+P0AICk4locby03Ujlt8+vfCvV4bUWCVNwfwxX8szcHoQeVv0fbG2YZh0KxOZ47lP4J7Rj2lxzJ/wAN+sYSCkm8A9v74kakdhv9MH9I0blbzFO54xkyBcD5YkymYyZZoKQRN4t+rY51UWDfEe7CIH8sZ9GJs4omZnOAAkrptbM5Tmy29v5Yo53PZZVHl0fNBJnkB+icKWYzdJEUapDfEdNl7HviB8yDQIWVBMSZ588bZgxIMn7L02G7ELaoNWCNxzRXM8SQwi0QpIJZkI9ImdP0xVbNqhFXUNI+EAeoGPxtOF/jWYpfu6ZCsYEKe256k7YqcPouWNM3O4vGLhRAbJtyK7VJlOkclMQOXFM9XPLrD0zM3Ym3znntHXFbPP5jAqSfTIIFrn2tim+V8hiXfU14UAFQYtOIM3xdlphSjaLdbnblsLc8bY0mMpkJ5dAkohwekPLbUSHX0rDQBJue5xT4TnGqV6h9T+WpMT0PLGmZy4BVJVajXMTABHvvy+eJOF5RcuQrHVra+ncCNv54OAGl4160QvLszQDbdEM1xKo2r7MUli2oEyfnse+Koz1QpCVUVSPVbnG8846b494rxGiqpTMyQSZY26T3wv5iuUIAioliYP4WxlOnI090DnsAuj2QrrrXW40MfVb4Y523B/nizUqtVpehZVWMhFuIFj3wGoojH1WX+HVc2sAeWD+VRqNJlWzadieXSx374FzNOPoh7unnNQCHEATv1dAXr6E0t6pIOki/aTy6xjetm1Cn7PTUGwAB7k9IA/PGDP6wdahmW2rTNz3/AJ49qZVEOrVMLc6rCd97kxa2G2GqMF2XXr+lVBzFRdLLCiGLdAOo743JIR28uBsLTEgWvbvjc5xTCD0CJcAQecSfvb4G57jgWmKWw3k3+Y6G0/PBBrnGAEo1WUm5y6euv5VzM8TRIGgE6QSQoH174zAvJV6DLLVFBnnIxmC7trbEFI+qm4cPhdJqcXpHctyi3TGtZkb4TztI98ZjMch9MN0XiFRp8OqO2ocz/FsD2/HFv/J6hWxHzY/X3xmMwFWq5uiElRtwRyJ9O3M+39caVPDtTYaSeV9/6YzGYT9S8FDmKpHhVRfx5+/9MaVco4OmBv1x7jMXNrOJgra0bKuJ3HLf++N6nD3FyBc8u2MxmGF5AW1XSnUDWBHbUMXlpVu5nb1dPn+pxmMwuo+2i0VuBXiA7D/d8vpiRUzJHxTEi8d8ZjMKc+2gWlUeq8xpAO5xsHJ+Iz7jGYzFESsUiKGn4Lf6Tb8caUqemWgcu/54zGYwCJV/ZdNr8YxrtJ+wlQ0eHydbxNR/h5DueR3x5nK6y6M0BNiF+L3+mMxmCaS50dax9l7t7iAXJe4xw/VXVaY0+kE369MXcw/lAlQWkQWJ5DfvvzxmMxYTmcGnRT02gF79/wAL3L5kPQNQ2LNsBtp7nrjbNcRqIPUqMCLHp8uZ74zGYAAd5HMrXeONJp3hDKyhQXLarAwZ58sQZvPEhNIj53+uMxmKWNBglT1qjs0Dq6iHEJbUVAgROPBm7gRbGYzDcjQpu9eAL7pgzdJKapLkyJiNzyHtirV4i6oNoYGOsdcZjMSUpIBKue92nJU8rnBdVJCnn8/ridKnq007vy1EkGNzBtJ77RjMZh5YASk5u8aAUJz+YqqdRABYSTa8/wDGA2YqljJ3xmMxVRAjRcSu905STChjGYzGYeppX//Z"
                alt="Placeholder 1"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  width: "150px",
                  height: "150px",
                  boxShadow: 3,
                  transform: "rotate(-10deg)",
                }}
              />
              <Box
                component="img"
                src="https://www.rhs.org.uk/getmedia/0b27ab69-9459-4445-9a07-4656e4d7b1dd/king-charles-in-garden-at-highgrove.jpg?width=940&height=627&ext=.jpg"
                alt="Placeholder 2"
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  width: "120px",
                  height: "120px",
                  boxShadow: 3,
                  transform: "rotate(15deg)",
                }}
              />
              <Box
                component="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbehs6RuEkVc-p2Rieb_Mr0IHMrqZlJH_U4w&s"
                alt="Placeholder 3"
                sx={{
                  position: "absolute",
                  top: "70%",
                  left: "10%",
                  width: "140px",
                  height: "140px",
                  boxShadow: 3,
                  transform: "rotate(-5deg)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "#4A6670", my: 2 }} />
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
