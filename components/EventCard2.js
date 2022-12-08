import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function EventCard() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                증류소 펀딩 현황 - 숙성주류 만들어지는 시간 표시
              </Typography>
              <Typography variant="body2" gutterBottom>
                그래프 바를 이용하여 상품들마다 표시할 것
              </Typography>
              <Typography variant="body2" color="text.secondary">
                EX-OO 위스키 56% 진행중 같이 리스트로 표실할 것임
              </Typography>
            </Grid>
           
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              가격
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}