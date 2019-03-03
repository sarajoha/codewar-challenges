"""Given an array of numbers, return a string made up of four parts:

a) a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

b) the same as above, post sorting the array into ascending order,

c) the same as above, post sorting the array into descending order,

d) the same as above, post converting the array into ASCII characters and sorting alphabetically.

The four parts should form a single string, each part separated by a hyphen: '-'

example format of solution: 'asdf-tyui-ujng-wedg'
"""

def sort_transform(arr):
      
    word_list = []

    word1 = transform(arr)

    word2 = transform(sorted(arr))
    
    word3 = transform(sorted(arr, reverse = True))

    arr_ascii = arr_to_ascii(arr)
    ascii_word = [arr_ascii[0], arr_ascii[1], arr_ascii[-2], arr_ascii[-1]]
    word4 = "".join(ascii_word)
    
    word_list.extend([word1, word2, word3, word4])
    
    return "-".join(word_list)
    
def transform(arr):
    numlist = [arr[0], arr[1], arr[-2], arr[-1]]
    word = []
    for num in numlist:
        letter = chr(num)
        word.append(letter)

    return "".join(word)


def arr_to_ascii(arr):
    ascii_list = []

    for item in arr:
        letter = chr(item)
        ascii_list.append(letter)

    ascii_list.sort()

    return ascii_list