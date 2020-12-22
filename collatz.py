def collatz(num):
	if num % 2 == 0:
		print(num//2)
		return num//2
	elif num % 2 == 1:
		result = num*3 + 1
		print(result)
		return result

def tryagain():
	try:
		n = input("Enter a number for collatz sequencing.\n")
		while n != 1:
			n = collatz(int(n))
	except ValueError:
		print("Enter an integer please.\n")
		tryagain()
	

tryagain()