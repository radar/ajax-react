module ApplicationHelper
  # TODO: Can we remove the data-props attribute? Does it risk
  # showing info that shouldn't be easily visible to users?
  def react_component(component_name, **props)
    content_tag(
      "div",
      data: {
        react_component: component_name,
        props: props.to_json,
      }
    ) { "" }
  end
end
