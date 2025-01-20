//create a reference variable and declare one variable in that and take one integer and print that integer also in output in c
#include <stdio.h>

int main() {
    int number = 10;
    float num = 6.9;

    int *ptr = &number; 
    int *ptr = &num;
    printf("Integer value: %d\n", *ptr); 
    printf("decimal value is: %d\n",*ptr);
    
    return 0;
}

