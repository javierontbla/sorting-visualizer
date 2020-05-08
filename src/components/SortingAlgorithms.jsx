import React, { Fragment, Component } from 'react';
import NavBar from './NavBar'
import './SortingAlgorithms.css'
import delay from 'delay'

class SortingAlgorithms extends Component {
    constructor(props) {
        super(); 
        this.state = {
            originalList: []
        }
    }

    randomListGenerator = (size) => {
        let randomArr = []
        for (let x = 0; x < size; x++) {
            let newNum = Math.floor(Math.random() * 600)
            randomArr.push(newNum)
        }
        this.setState({ originalList: randomArr })
    }

    componentDidMount() {
        this.randomListGenerator(80)
    }

    bubbleSort = () => {
        let randomListLen = (this.state.originalList).length
        let unsortedList = this.state.originalList
        let square = randomListLen * 7
            for (let j = 1; j <= square; j++) {
                for (let i = 0; i < randomListLen; i++) {
                    setTimeout(() => {
                        if (unsortedList[i] > unsortedList[i+1]) {
                        let biggest = unsortedList[i]
                        unsortedList[i] = unsortedList[i+1]
                        unsortedList[i+1] = biggest
                        this.setState({ originalList: unsortedList  })
                        }
                    }, i * 1)
                }  
            }
        }
    
    mergeSort = (arr) => {
        if (arr.length <= 1) return arr
        let middleValue = Math.floor(arr.length / 2)
        let left = this.mergeSort(arr.slice(0, middleValue))
        let right = this.mergeSort(arr.slice(middleValue))

        return this.merge(left, right)
    }

    merge = (leftSide, rightSide) => {
        let sorted  = []
        while (leftSide.length && rightSide.length) {
            if (leftSide[0] < rightSide[0]) sorted.push(leftSide.shift())
            else sorted.push(rightSide.shift())
        }
        
        this.setState({ originalList: sorted.concat(leftSide.slice().concat(rightSide.slice())) })
        return sorted.concat(leftSide.slice().concat(rightSide.slice()))
    }

    quickSort = (arr) => {
        if (arr.length < 1) return arr
        const pivot = arr[arr.length - 1]
        const left = []
        const right = []
        for (const num of arr.slice(0, arr.length - 1)) {
            if (num < pivot) {
            left.push(num)
            }
            else right.push(num)
        }
 
        this.setState({ originalList: ([...this.quickSort(left), pivot, ...this.quickSort(left)]) }) 
        return [...this.quickSort(left), pivot, ...this.quickSort(left)]
    }

    // [1, 8, 7, 6, 2, 15, 9]

    render() {
        return (
            <Fragment>
                <NavBar bubbleSort={ this.bubbleSort } 
                        mergeSort={ () => { this.mergeSort(this.state.originalList) } }
                        quickSort={ () => { this.quickSort(this.state.originalList) } }
                        smallList={ () => { this.randomListGenerator(50) } }
                        mediumList={() => { this.randomListGenerator(80) } }
                        largeList={ () => { this.randomListGenerator(144) } }
                        />
                <div className='barsContainer'>
                {this.state.originalList.map((num, index) => (
                    <div 
                    className='arrBar' 
                    key={index}
                    style={{height: `${num}px`}}>
                    </div>
                ))}
                </div>
            </Fragment>
        );
    }
}

export default SortingAlgorithms;
