/**
 * 
 * https://leetcode.com/problems/smallest-sufficient-team/
 * 
 * Recursion | Backtrakcing
 * n = number of people.
 * Time O(2^n) | Space O(n); // this won't be accepted on leetcode. But the n is not greater than 16 so it should be fine.
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {

    const reqSkillsBits = (1 << req_skills.length) - 1;
    
    const skillHash = {};
    for(let i = 0; i < req_skills.length; i++) {
        const skill = req_skills[i];
        skillHash[skill] = i;
    }

    let selectedPeople = [];
    for(let i = 0; i < 61; i++) {
        selectedPeople.push(i);
    }

    const updateCurrSkillsBits = (skills, currSkills) => {
        for(let i = 0; i < skills.length; i++) {
            const skill = skills[i];
            currSkills |= 1 << skillHash[skill];
        }
        return currSkills;
    }

    const dfs = (index, currSkills, currEmployees) => {

        if(index === people.length && currSkills === reqSkillsBits) {
            if(currEmployees.length < selectedPeople.length) {
                console.log(currEmployees);
                selectedPeople = currEmployees.slice(); 
            }
            return;
        }
        if(index === people.length) return;

        currEmployees.push(index)
        dfs(index + 1, updateCurrSkillsBits(people[index], currSkills), currEmployees);
        // backtrack
        currEmployees.pop();
        dfs(index + 1, currSkills, currEmployees);

    }

    dfs(0, 0, []);
    return selectedPeople;
};

/**
 * 
 * This will work. I don't know why. But you haven't had a chance to take a look at it. So, take a look!
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam1 = function(req_skills, people) {
    
    const skillIndexMap = new Map();
    
    req_skills.forEach((skill, index) => skillIndexMap.set(skill,index) );
    
    const skillTeamMap = new Map([[0, []]]);
    
    people.forEach( (skills, index) => {
        
        let hisSkills = 0;
                
        for (const skill of skills) {
            hisSkills |= 1 << skillIndexMap.get(skill);
        }
                
        for (const [currSkill, team] of skillTeamMap) {
            
            const totalSkills = currSkill | hisSkills;
            
            if (totalSkills === currSkill) {
                continue;
            }
            
            if (    
                !skillTeamMap.has(totalSkills) || 
                team.length + 1 < skillTeamMap.get(totalSkills).length
            ) {                
                skillTeamMap.set(totalSkills, [...team, index])
            }             
        }
    });
        
    return skillTeamMap.get( (1<<req_skills.length) - 1);
};