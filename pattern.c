#include <stdio.h>
int main (int argc,char **argv){

int count;
    printf("Please enter number:");
    scanf("%d",&count);
    

    for(int row=0;row<count;row++){
        for(int col=0;col<count-row;col++){
            printf(" ");
        }
        for(int col=0;col<row+1;col++){
                printf("*");
        }
        for(int col=0;col<row;col++){
                printf("*");
        }
       printf("\n"); 
    }
}