import { Box, Card, CardContent, Typography } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { pieData } from '../data/piedata';
export const Graph = () => {
  return (
    <>
              <Card>
              <CardContent>
                <Typography variant="h6">Portfolio Asset Allocation</Typography>
                <Box sx={{ width: '100%', height: '300px' }}>
                  <Pie data={pieData} />
                </Box>
              </CardContent>
            </Card>
    </>
  )
}

