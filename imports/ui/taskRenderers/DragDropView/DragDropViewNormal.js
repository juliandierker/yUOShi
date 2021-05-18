import React, { useCallback } from "react";
import PropTypes from "prop-types"
import { Container, Draggable } from "react-smooth-dnd";

import "./DragDropViewNormal.css"

/**
 * @typedef Card
 * @property {string} id
 * @property {string} name
 * @property {object} props
 */

/**
 * @typedef Column
 * @property {string} id
 * @property {string} name
 * @property {object} props
 * @property {Card[]} children
 */

/**
 * @typedef Scene
 * @property {Column[]} children
 * @property {object} props
 */

/**
 * @typedef DragDropViewProps
 * @property {Scene} scene
 * @property {Function} onColumnDrop
 * @property {Function} onCardDrop
 * @property {Function} getCardPayload
 */

/**
 * DragDropViewNormal Component
 *
 * @param {DragDropViewProps} props
 * @returns {ReactElement|null}
 */
export default function DragDropViewNormal(props) {
    const {
        scene,
        onColumnDrop,
        onCardDrop,
        getCardPayload,
    } = props

    const onCardDropListener = useCallback((id) => (e) => {
        return onCardDrop(id, e)
    }, [onCardDrop])

    const getChildPayload = useCallback((id) => (index) => {
        return getCardPayload(id, index)
    }, [getCardPayload])

    return (
        <div className="card-scene">
            <Container
                orientation={scene.props.orientation}
                onDrop={onColumnDrop}
                dragHandleSelector=".column-drag-handle"
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: "cards-drop-preview"
                }}
            >
                {scene.children.map(column => {
                    return (
                        <Draggable key={`drag-column-${column.id}`}>
                            <div className={column.props.className}>
                                <div className="card-column-header">{column.name}</div>
                                <Container
                                    {...column.props}
                                    groupName="col"
                                    onDrop={onCardDropListener(column.id)}
                                    getChildPayload={getChildPayload(column.id)}
                                    dragClass="card-ghost"
                                    dropClass="card-ghost-drop"

                                    dropPlaceholder={{
                                        animationDuration: 150,
                                        showOnTop: true,
                                        className: "drop-preview"
                                    }}
                                    dropPlaceholderAnimationDuration={200}
                                >
                                    {column.children.map(card => {
                                        return (
                                            <Draggable key={`dnd-card-${card.id}`}>
                                                <div {...card.props}>
                                                    <p>{card.data}</p>
                                                </div>
                                            </Draggable>
                                        );
                                    })}
                                </Container>
                            </div>
                        </Draggable>
                    );
                })}
            </Container>
        </div>
    );
}

DragDropViewNormal.propTypes = {
    scene: PropTypes.shape({
        props: PropTypes.object.isRequired,
        children: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            props: PropTypes.object.isRequired,
            children: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                data: PropTypes.string.isRequired,
                props: PropTypes.object.isRequired,
            }))
        }))
    }).isRequired,
    onColumnDrop: PropTypes.func.isRequired,
    onCardDrop: PropTypes.func.isRequired,
    getCardPayload: PropTypes.func.isRequired,
}
