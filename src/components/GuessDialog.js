import * as React from "react";
import { Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

export default function GuessDialog({ dialogOpen, solution, onCloseDialog }) {
    const [seeSolution, setSeeSolution] = React.useState(false);

    const seeSolutionClick = () => {
        setSeeSolution(true);
    };

    return (
        <div>
            <Dialog open={dialogOpen} onClose={onCloseDialog} aria-describedby="alert-dialog-slide-description">
                <DialogTitle>{"Give Up?"}</DialogTitle>
                <DialogContent>
                    <Box mx={{ textAlign: "center", fontSize: 16, p: 3 }}>
                        {!seeSolution && (
                            <div>
                                <DialogContentText id="alert-dialog-slide-description">Do you want to see the solution?</DialogContentText>

                                <Button onClick={seeSolutionClick}>See Solution</Button>
                            </div>
                        )}
                        {seeSolution && <DialogContentText id="alert-dialog-slide-description">The solution is: <strong>{solution.toUpperCase()}</strong></DialogContentText>}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseDialog}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
