def solution(string, ending):
    # your code here...
    end = len(ending)
    wordEnd = string[-end:]
    if wordEnd == ending:
        return True
    else:
        return False