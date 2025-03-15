class Solution {
public:
    int maximumSwap(int num) {
        string s = to_string(num);
        int n = s.size();
        vector<int> nums(10,-1);
        for(int i =0;i<n;i++){
            nums[s[i]-'0']=i;
        }
        for(int i =0;i<n;i++){
            for(int d =9;d>s[i]-'0';--d){
                if(nums[d]>i){
                 swap(s[i], s[nums[d]]);
                 return stoi(s);
                }
            }
        }
        return num;
    }
};