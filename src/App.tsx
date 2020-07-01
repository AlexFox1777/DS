import React, { FunctionComponent } from "react";
// styles
import styled from "styled-components";
// components
import PageDescrioption from "./components/page-description/PageDescription";
import InsertionSort from "./components/sorting/iterative_sorting/insertion_sort/InsertionSort";

const App: FunctionComponent = () => {
    return (
        <Root>
            <PageDescrioption
                algorithm={<InsertionSort />}
                title={INSERTION_SORT.title}
                description={INSERTION_SORT.description}
                complexity={INSERTION_SORT.complexity}
            />
        </Root>
    );
};

const INSERTION_SORT = {
    title: "Insertion Sort",
    description:
        "Insertion sort works by moving from left to right over an input list. You could compare it to the way you would sort a set of cards that you were holding in your hand. You’d scan the set from left to right, grabbing each card as you go and moving it to the position where the card to it’s left would be smaller or equal to the current card’s value. After you move the card furthest to the right, you’ll be left with a set of cards that has been sorted in ascending order. Insertion sort will use the current item as a “key”, and then search through the items to the left of that item in the input list for the place that the key should go. This means that the sub-list to the left of the current “key” will already be sorted, and will remain sorted after every iteration of insertion sort.",
    complexity: "O(n²), or quadratic, time in the worst case",
};

const Root = styled.div`
    max-width: ${(props) => props.theme.breakpoints.maxWidth}px;
    margin: auto;
`;

export default App;
