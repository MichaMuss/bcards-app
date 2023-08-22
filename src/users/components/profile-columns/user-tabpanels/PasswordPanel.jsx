
import Input from "../../../../forms/components/Input";

function PasswordPanel({data, onChange, getErrorMessage}) {
    return ( <>
                <Input
                    data={data} 
                    name={"password"}
                    type={"password"}
                    error={getErrorMessage("password")}
                    onChange={onChange} 
                    required={true} 
                    label={"Password"} />
                <Input 
                    data={data} 
                    type={"password"}
                    name={"repeat_password"}
                    error={getErrorMessage("repeat_password")}
                    onChange={onChange} 
                    required={true} 
                    label={"Repeat password"} />
            </>);
}

export default PasswordPanel;